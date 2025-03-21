const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/certificates/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|pdf/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    }
    cb(new Error('Only .jpeg, .jpg, .png and .pdf format allowed!'));
  }
});

// Mock database
let certificates = [];

// Get certificates for a student
router.get('/student', (req, res) => {
  try {
    const userId = req.user.id;
    const userCertificates = certificates.filter(cert => cert.studentId === userId);
    res.json(userCertificates);
  } catch (error) {
    console.error('Error fetching student certificates:', error);
    res.status(500).json({ error: 'Failed to fetch certificates' });
  }
});

// Get certificates for an institution
router.get('/institution', (req, res) => {
  try {
    const institutionId = req.user.id;
    const issuedCertificates = certificates.filter(cert => cert.institutionId === institutionId);
    res.json(issuedCertificates);
  } catch (error) {
    console.error('Error fetching institution certificates:', error);
    res.status(500).json({ error: 'Failed to fetch certificates' });
  }
});

// Get certificates for an employer (only verified certificates)
router.get('/employer', (req, res) => {
  try {
    // Employers can only see verified certificates
    const verifiedCertificates = certificates.filter(cert => cert.status === 'approved');
    res.json(verifiedCertificates);
  } catch (error) {
    console.error('Error fetching employer certificates:', error);
    res.status(500).json({ error: 'Failed to fetch certificates' });
  }
});

// Upload a new certificate
router.post('/upload', upload.single('file'), (req, res) => {
  try {
    const { title, description, studentEmail } = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    if (!title || !description || !studentEmail) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Generate a hash of the file for verification
    const fileBuffer = require('fs').readFileSync(file.path);
    const hash = crypto.createHash('sha256').update(fileBuffer).digest('hex');

    const newCertificate = {
      id: uuidv4(),
      title,
      description,
      studentId: req.user.id, // In real app, this would be the student's ID
      institutionId: req.user.id,
      fileUrl: `/uploads/certificates/${file.filename}`,
      status: 'pending',
      uploadedAt: new Date().toISOString(),
      hash // Store the hash for verification
    };

    certificates.push(newCertificate);
    res.status(201).json(newCertificate);
  } catch (error) {
    console.error('Error uploading certificate:', error);
    res.status(500).json({ error: 'Failed to upload certificate' });
  }
});

// Verify a certificate
router.post('/:id/verify', (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['approved', 'rejected'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    // Only institutions can verify certificates
    if (req.user.userType !== 'institution') {
      return res.status(403).json({ error: 'Only institutions can verify certificates' });
    }

    const certificate = certificates.find(cert => cert.id === id);
    if (!certificate) {
      return res.status(404).json({ error: 'Certificate not found' });
    }

    // Only the issuing institution can verify their own certificates
    if (certificate.institutionId !== req.user.id) {
      return res.status(403).json({ error: 'You can only verify certificates issued by your institution' });
    }

    certificate.status = status;
    certificate.verifiedAt = new Date().toISOString();
    certificate.verifiedBy = {
      id: req.user.id,
      name: req.user.name,
      role: 'institution'
    };

    res.json(certificate);
  } catch (error) {
    console.error('Error verifying certificate:', error);
    res.status(500).json({ error: 'Failed to verify certificate' });
  }
});

// Get a specific certificate
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const certificate = certificates.find(cert => cert.id === id);
    
    if (!certificate) {
      return res.status(404).json({ error: 'Certificate not found' });
    }

    // Check if user has access to this certificate
    const userId = req.user.id;
    const userType = req.user.userType;

    if (
      userType === 'student' && certificate.studentId !== userId ||
      userType === 'institution' && certificate.institutionId !== userId ||
      userType === 'employer' && certificate.status !== 'approved'
    ) {
      return res.status(403).json({ error: 'Access denied' });
    }

    res.json(certificate);
  } catch (error) {
    console.error('Error fetching certificate:', error);
    res.status(500).json({ error: 'Failed to fetch certificate' });
  }
});

// Verify certificate authenticity
router.post('/:id/verify-authenticity', (req, res) => {
  try {
    const { id } = req.params;
    const certificate = certificates.find(cert => cert.id === id);

    if (!certificate) {
      return res.status(404).json({ error: 'Certificate not found' });
    }

    // Only allow verification of approved certificates
    if (certificate.status !== 'approved') {
      return res.status(400).json({ error: 'Certificate is not approved' });
    }

    // Verify the file hash
    const fileBuffer = require('fs').readFileSync(path.join(__dirname, '..', certificate.fileUrl));
    const currentHash = crypto.createHash('sha256').update(fileBuffer).digest('hex');

    const isAuthentic = currentHash === certificate.hash;

    res.json({
      isAuthentic,
      certificate: {
        ...certificate,
        hash: undefined // Don't expose the hash
      }
    });
  } catch (error) {
    console.error('Error verifying certificate authenticity:', error);
    res.status(500).json({ error: 'Failed to verify certificate authenticity' });
  }
});

module.exports = router;
