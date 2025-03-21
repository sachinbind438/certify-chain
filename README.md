# H2C - Blockchain Certificate Platform

A modern platform for issuing, managing, and verifying academic certificates using blockchain technology.

## Features

### For Institutions
- Issue new certificates/documents
- View and manage issued certificates
- Verify documents
- Analytics and reporting
- Template management

### For Employers
- View and verify documents from institutions
- Manage verified certificates
- Search and filter functionality
- Verification history

### For Students
- Access secure digital certificates
- Share certificates with employers
- Track certificate status

## Tech Stack

### Frontend
- Next.js 13 with App Router
- Tailwind CSS for styling
- TypeScript for type safety
- Modern UI with responsive design
- Role-based access control

### Backend
- Node.js with Express
- MongoDB for data storage
- JWT for authentication
- RESTful API architecture

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd H2C
```

2. Install dependencies:
```bash
# Install frontend dependencies
cd my-app
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Start the development servers:
```bash
# Start frontend (from my-app directory)
npm run dev

# Start backend (from backend directory)
node server.js
```

4. Open your browser and navigate to:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5002

## Color Scheme
- Primary Blue: #00ABE4
- Secondary Blue: #003BE4

## Project Structure
```
H2C/
├── my-app/              # Frontend Next.js application
│   ├── src/
│   │   ├── app/        # App router pages
│   │   ├── components/ # Reusable components
│   │   └── styles/     # Global styles
│   └── public/         # Static assets
└── backend/            # Node.js backend
    ├── routes/         # API routes
    ├── models/         # Database models
    ├── middleware/     # Custom middleware
    └── data/          # Sample data
```

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License.
