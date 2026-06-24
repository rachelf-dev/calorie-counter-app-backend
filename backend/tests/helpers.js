const jwt = require('jsonwebtoken');
const request = require('supertest');

const User = require('../models/User');
const app = require('../index');

async function createUser(overrides = {}) {
  return User.create({
    name: 'Test User',
    email: 'test@example.com',
    password: 'secret123',
    role: 'user',
    ...overrides,
  });
}

async function createAdmin(overrides = {}) {
  return createUser({
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'admin123',
    role: 'admin',
    ...overrides,
  });
}

function signToken(user) {
  return jwt.sign(
    { id: user._id.toString(), role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
  );
}

function authHeader(token) {
  return { Authorization: `Bearer ${token}` };
}

async function registerUser(payload = {}) {
  const body = {
    name: 'New User',
    email: 'newuser@example.com',
    password: 'password123',
    ...payload,
  };

  const response = await request(app).post('/api/auth/register').send(body);

  return { response, body };
}

async function loginUser(email, password) {
  return request(app).post('/api/auth/login').send({ email, password });
}

module.exports = {
  app,
  createUser,
  createAdmin,
  signToken,
  authHeader,
  registerUser,
  loginUser,
};
