const jwt = require('jsonwebtoken');
const request = require('supertest');
const bcrypt = require('bcryptjs');

const User = require('../models/User');
const { app, registerUser, loginUser } = require('./helpers');

describe('Auth API', () => {
  describe('POST /api/auth/register', () => {
    it('registers a user and returns token without password', async () => {
      const { response, body } = await registerUser();

      expect(response.status).toBe(201);
      expect(response.body.token).toBeDefined();
      expect(response.body.user).toMatchObject({
        name: body.name,
        email: body.email,
        role: 'user',
      });
      expect(response.body.user.password).toBeUndefined();

      const storedUser = await User.findByEmailWithPassword(body.email);
      expect(storedUser).not.toBeNull();
      expect(storedUser.password).not.toBe(body.password);
      expect(await bcrypt.compare(body.password, storedUser.password)).toBe(true);
    });

    it('returns 409 when email is already registered', async () => {
      await registerUser();

      const { response } = await registerUser();

      expect(response.status).toBe(409);
      expect(response.body.message).toMatch(/already registered/i);
    });

    it('returns 400 for invalid registration payload', async () => {
      const response = await request(app).post('/api/auth/register').send({
        name: '',
        email: 'not-an-email',
        password: '123',
      });

      expect(response.status).toBe(400);
      expect(response.body.message).toBe('Validation failed');
      expect(Array.isArray(response.body.errors)).toBe(true);
    });
  });

  describe('POST /api/auth/login', () => {
    beforeEach(async () => {
      await registerUser();
    });

    it('logs in with valid credentials and returns JWT payload', async () => {
      const response = await loginUser('newuser@example.com', 'password123');

      expect(response.status).toBe(200);
      expect(response.body.token).toBeDefined();
      expect(response.body.user.email).toBe('newuser@example.com');
      expect(response.body.user.password).toBeUndefined();

      const decoded = jwt.verify(response.body.token, process.env.JWT_SECRET);
      expect(decoded.id).toBeDefined();
      expect(decoded.role).toBe('user');
    });

    it('returns 401 for wrong password', async () => {
      const response = await loginUser('newuser@example.com', 'wrong-password');

      expect(response.status).toBe(401);
      expect(response.body.message).toMatch(/invalid email or password/i);
    });

    it('returns 401 for unknown email', async () => {
      const response = await loginUser('missing@example.com', 'password123');

      expect(response.status).toBe(401);
      expect(response.body.message).toMatch(/invalid email or password/i);
    });

    it('returns 400 when required fields are missing', async () => {
      const response = await request(app).post('/api/auth/login').send({
        email: 'newuser@example.com',
      });

      expect(response.status).toBe(400);
      expect(response.body.message).toBe('Validation failed');
    });
  });
});
