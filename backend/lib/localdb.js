const fs = require('fs').promises;
const path = require('path');
const bcrypt = require('bcryptjs');

const DB_PATH = path.join(__dirname, '../data/users.json');

// Ensure data directory exists
const ensureDbFile = async () => {
  try {
    await fs.mkdir(path.dirname(DB_PATH), { recursive: true });
    try {
      await fs.access(DB_PATH);
    } catch {
      await fs.writeFile(DB_PATH, JSON.stringify([]));
    }
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
};

const readDb = async () => {
  await ensureDbFile();
  const data = await fs.readFile(DB_PATH, 'utf8');
  return JSON.parse(data);
};

const writeDb = async (data) => {
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
};

const findUserByEmail = async (email) => {
  const users = await readDb();
  return users.find(user => user.email === email);
};

const createUser = async (userData) => {
  const users = await readDb();
  const newUser = {
    id: Date.now().toString(),
    ...userData,
    createdAt: new Date().toISOString(),
    lastLogin: new Date().toISOString()
  };
  users.push(newUser);
  await writeDb(users);
  const { password, ...userWithoutPassword } = newUser;
  return userWithoutPassword;
};

module.exports = {
  findUserByEmail,
  createUser,
  ensureDbFile
};
