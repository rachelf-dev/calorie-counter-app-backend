const request = require('supertest');

const Product = require('../models/Product');
const {
  app,
  createUser,
  createAdmin,
  signToken,
  authHeader,
} = require('./helpers');

const validPayload = {
  name: 'Apple',
  caloriesPer100g: 52,
  servingSizes: [{ unit: 'cup', weightInGrams: 125 }],
};

async function seedProduct(overrides = {}) {
  return Product.create({
    name: 'Global Product',
    caloriesPer100g: 100,
    servingSizes: [{ unit: 'grams', weightInGrams: 100 }],
    createdBy: null,
    ...overrides,
  });
}

describe('Products API', () => {
  describe('GET /api/products', () => {
    it('returns 401 without token', async () => {
      const response = await request(app).get('/api/products');

      expect(response.status).toBe(401);
    });

    it('returns global and own products for authenticated user', async () => {
      const user = await createUser({ email: 'products@example.com' });
      const otherUser = await createUser({ email: 'other@example.com' });
      const token = signToken(user);

      await seedProduct({ name: 'Global Hummus' });
      await seedProduct({ name: 'My Private Yogurt', createdBy: user._id });
      await seedProduct({ name: 'Other Private Cheese', createdBy: otherUser._id });

      const response = await request(app)
        .get('/api/products')
        .set(authHeader(token));

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);

      const names = response.body.map((product) => product.name);
      expect(names).toContain('Global Hummus');
      expect(names).toContain('My Private Yogurt');
      expect(names).not.toContain('Other Private Cheese');
    });

    it('filters products by search query (case-insensitive)', async () => {
      const user = await createUser({ email: 'search@example.com' });
      const token = signToken(user);

      await seedProduct({ name: 'Banana Smoothie' });
      await seedProduct({ name: 'Apple Pie', createdBy: user._id });
      await seedProduct({ name: 'Orange Juice' });

      const response = await request(app)
        .get('/api/products?search=apple')
        .set(authHeader(token));

      expect(response.status).toBe(200);

      const names = response.body.map((product) => product.name);
      expect(names).toEqual(['Apple Pie']);
    });
  });

  describe('GET /api/products/my', () => {
    it('returns only the caller own products', async () => {
      const user = await createUser({ email: 'my-products@example.com' });
      const otherUser = await createUser({ email: 'my-other@example.com' });
      const token = signToken(user);

      await seedProduct({ name: 'Global Bread' });
      await seedProduct({ name: 'My Oats', createdBy: user._id });
      await seedProduct({ name: 'Other Rice', createdBy: otherUser._id });

      const response = await request(app)
        .get('/api/products/my')
        .set(authHeader(token));

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body).toHaveLength(1);
      expect(response.body[0].name).toBe('My Oats');
      expect(response.body[0].createdBy).toBe(user._id.toString());
    });
  });

  describe('POST /api/products', () => {
    it('creates a private product for a regular user', async () => {
      const user = await createUser({ email: 'create-user@example.com' });
      const token = signToken(user);

      const response = await request(app)
        .post('/api/products')
        .set(authHeader(token))
        .send(validPayload);

      expect(response.status).toBe(201);
      expect(response.body.name).toBe('Apple');
      expect(response.body.createdBy).toBe(user._id.toString());
      expect(response.body.servingSizes).toEqual(validPayload.servingSizes);
    });

    it('creates a global product for an admin', async () => {
      const admin = await createAdmin({ email: 'create-admin@example.com' });
      const token = signToken(admin);

      const response = await request(app)
        .post('/api/products')
        .set(authHeader(token))
        .send(validPayload);

      expect(response.status).toBe(201);
      expect(response.body.createdBy).toBeNull();
    });

    it('returns 400 for invalid product payload', async () => {
      const user = await createUser({ email: 'invalid-create@example.com' });
      const token = signToken(user);

      const response = await request(app)
        .post('/api/products')
        .set(authHeader(token))
        .send({
          name: '',
          caloriesPer100g: -1,
          servingSizes: [],
        });

      expect(response.status).toBe(400);
      expect(response.body.message).toBe('Validation failed');
    });
  });

  describe('PUT /api/products/:id', () => {
    it('allows owner to update own product', async () => {
      const user = await createUser({ email: 'update-owner@example.com' });
      const token = signToken(user);
      const product = await seedProduct({ name: 'Old Name', createdBy: user._id });

      const response = await request(app)
        .put(`/api/products/${product._id}`)
        .set(authHeader(token))
        .send({
          name: 'New Name',
          caloriesPer100g: 80,
          servingSizes: [{ unit: 'slice', weightInGrams: 30 }],
        });

      expect(response.status).toBe(200);
      expect(response.body.name).toBe('New Name');
      expect(response.body.caloriesPer100g).toBe(80);
    });

    it('returns 403 when non-owner tries to update', async () => {
      const owner = await createUser({ email: 'update-owner2@example.com' });
      const other = await createUser({ email: 'update-other@example.com' });
      const token = signToken(other);
      const product = await seedProduct({ name: 'Protected', createdBy: owner._id });

      const response = await request(app)
        .put(`/api/products/${product._id}`)
        .set(authHeader(token))
        .send(validPayload);

      expect(response.status).toBe(403);
      expect(response.body.message).toMatch(/only update your own products/i);
    });

    it('allows admin to update any product', async () => {
      const user = await createUser({ email: 'update-target@example.com' });
      const admin = await createAdmin({ email: 'update-admin@example.com' });
      const token = signToken(admin);
      const product = await seedProduct({ name: 'User Product', createdBy: user._id });

      const response = await request(app)
        .put(`/api/products/${product._id}`)
        .set(authHeader(token))
        .send({
          ...validPayload,
          name: 'Admin Updated',
        });

      expect(response.status).toBe(200);
      expect(response.body.name).toBe('Admin Updated');
    });

    it('returns 404 when product does not exist', async () => {
      const user = await createUser({ email: 'update-missing@example.com' });
      const token = signToken(user);
      const missingId = '507f1f77bcf86cd799439011';

      const response = await request(app)
        .put(`/api/products/${missingId}`)
        .set(authHeader(token))
        .send(validPayload);

      expect(response.status).toBe(404);
      expect(response.body.message).toMatch(/product not found/i);
    });

    it('returns 400 for invalid product id', async () => {
      const user = await createUser({ email: 'update-invalid-id@example.com' });
      const token = signToken(user);

      const response = await request(app)
        .put('/api/products/not-a-valid-id')
        .set(authHeader(token))
        .send(validPayload);

      expect(response.status).toBe(400);
      expect(response.body.message).toBe('Validation failed');
    });
  });

  describe('DELETE /api/products/:id', () => {
    it('allows owner to delete own product', async () => {
      const user = await createUser({ email: 'delete-owner@example.com' });
      const token = signToken(user);
      const product = await seedProduct({ name: 'To Delete', createdBy: user._id });

      const response = await request(app)
        .delete(`/api/products/${product._id}`)
        .set(authHeader(token));

      expect(response.status).toBe(200);
      expect(response.body.message).toMatch(/deleted successfully/i);

      const deleted = await Product.findById(product._id);
      expect(deleted).toBeNull();
    });

    it('returns 403 when non-owner tries to delete', async () => {
      const owner = await createUser({ email: 'delete-owner2@example.com' });
      const other = await createUser({ email: 'delete-other@example.com' });
      const token = signToken(other);
      const product = await seedProduct({ name: 'Protected Delete', createdBy: owner._id });

      const response = await request(app)
        .delete(`/api/products/${product._id}`)
        .set(authHeader(token));

      expect(response.status).toBe(403);
      expect(response.body.message).toMatch(/only delete your own products/i);
    });

    it('allows admin to delete any product', async () => {
      const user = await createUser({ email: 'delete-target@example.com' });
      const admin = await createAdmin({ email: 'delete-admin@example.com' });
      const token = signToken(admin);
      const product = await seedProduct({ name: 'Admin Delete Target', createdBy: user._id });

      const response = await request(app)
        .delete(`/api/products/${product._id}`)
        .set(authHeader(token));

      expect(response.status).toBe(200);

      const deleted = await Product.findById(product._id);
      expect(deleted).toBeNull();
    });

    it('returns 404 when product does not exist', async () => {
      const user = await createUser({ email: 'delete-missing@example.com' });
      const token = signToken(user);
      const missingId = '507f1f77bcf86cd799439011';

      const response = await request(app)
        .delete(`/api/products/${missingId}`)
        .set(authHeader(token));

      expect(response.status).toBe(404);
      expect(response.body.message).toMatch(/product not found/i);
    });
  });
});
