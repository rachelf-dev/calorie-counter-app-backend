const request = require('supertest');

const Product = require('../models/Product');
const {
  app,
  createUser,
  signToken,
  authHeader,
} = require('./helpers');

describe('Products + Logs integration', () => {
  it('runs full daily basket flow: today → add → remove → history', async () => {
    const user = await createUser({ email: 'flow@example.com', calorieGoal: 2000 });
    const token = signToken(user);

    const productA = await Product.create({
      name: 'Integration Rice',
      caloriesPer100g: 130,
      servingSizes: [{ unit: 'cup', weightInGrams: 150 }],
      createdBy: null,
    });
    const productB = await Product.create({
      name: 'Integration Chicken',
      caloriesPer100g: 165,
      servingSizes: [{ unit: 'grams', weightInGrams: 100 }],
      createdBy: null,
    });

    const emptyToday = await request(app)
      .get('/api/logs/today')
      .set(authHeader(token));

    expect(emptyToday.status).toBe(200);
    expect(emptyToday.body.totalCaloriesConsumed).toBe(0);
    expect(emptyToday.body.items).toHaveLength(0);

    const addA = await request(app)
      .post('/api/logs/add')
      .set(authHeader(token))
      .send({ productId: productA._id.toString(), unit: 'cup', quantity: 1 });

    expect(addA.status).toBe(201);
    expect(addA.body.totalCaloriesConsumed).toBe(195);

    const addB = await request(app)
      .post('/api/logs/add')
      .set(authHeader(token))
      .send({ productId: productB._id.toString(), unit: 'grams', quantity: 2 });

    expect(addB.status).toBe(201);
    expect(addB.body.totalCaloriesConsumed).toBe(525);
    expect(addB.body.items).toHaveLength(2);
    expect(addB.body.goalMet).toBe(true);

    const itemToRemove = addB.body.items[0]._id;

    const afterRemove = await request(app)
      .delete(`/api/logs/item/${itemToRemove}`)
      .set(authHeader(token));

    expect(afterRemove.status).toBe(200);
    expect(afterRemove.body.items).toHaveLength(1);
    expect(afterRemove.body.totalCaloriesConsumed).toBe(330);

    const todayAgain = await request(app)
      .get('/api/logs/today')
      .set(authHeader(token));

    expect(todayAgain.status).toBe(200);
    expect(todayAgain.body.totalCaloriesConsumed).toBe(330);

    const history = await request(app)
      .get('/api/logs/history')
      .set(authHeader(token));

    expect(history.status).toBe(200);
    expect(history.body).toHaveLength(1);
    expect(history.body[0].totalCaloriesConsumed).toBe(330);
  });

  it('creates a private product and adds it to today basket', async () => {
    const user = await createUser({ email: 'private-flow@example.com' });
    const token = signToken(user);

    const createProduct = await request(app)
      .post('/api/products')
      .set(authHeader(token))
      .send({
        name: 'My Homemade Salad',
        caloriesPer100g: 45,
        servingSizes: [{ unit: 'bowl', weightInGrams: 200 }],
      });

    expect(createProduct.status).toBe(201);
    expect(createProduct.body.createdBy).toBe(user._id.toString());

    const addToBasket = await request(app)
      .post('/api/logs/add')
      .set(authHeader(token))
      .send({
        productId: createProduct.body._id,
        unit: 'bowl',
        quantity: 1,
      });

    expect(addToBasket.status).toBe(201);
    expect(addToBasket.body.items[0].productName).toBe('My Homemade Salad');
    expect(addToBasket.body.items[0].calories).toBe(90);
    expect(addToBasket.body.totalCaloriesConsumed).toBe(90);
    expect(addToBasket.body.items[0].calories).toBeGreaterThan(0);
  });

  it('rejects private product with zero unit weight', async () => {
    const user = await createUser({ email: 'zero-weight@example.com' });
    const token = signToken(user);

    const response = await request(app)
      .post('/api/products')
      .set(authHeader(token))
      .send({
        name: 'Invalid Zero Weight',
        caloriesPer100g: 100,
        servingSizes: [{ unit: 'cup', weightInGrams: 0 }],
      });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Validation failed');
  });

  it('rejects private product with zero calories per 100g', async () => {
    const user = await createUser({ email: 'zero-cal@example.com' });
    const token = signToken(user);

    const response = await request(app)
      .post('/api/products')
      .set(authHeader(token))
      .send({
        name: 'Invalid Zero Calories',
        caloriesPer100g: 0,
        servingSizes: [{ unit: 'cup', weightInGrams: 100 }],
      });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Validation failed');
  });

  it('reflects goalMet=false when consumption exceeds calorie target', async () => {
    const user = await createUser({ email: 'goal-flow@example.com', calorieGoal: 500 });
    const token = signToken(user);

    const product = await Product.create({
      name: 'Integration Pizza',
      caloriesPer100g: 250,
      servingSizes: [{ unit: 'slice', weightInGrams: 100 }],
      createdBy: null,
    });

    const response = await request(app)
      .post('/api/logs/add')
      .set(authHeader(token))
      .send({ productId: product._id.toString(), unit: 'slice', quantity: 3 });

    expect(response.status).toBe(201);
    expect(response.body.totalCaloriesConsumed).toBe(750);
    expect(response.body.targetCalories).toBe(500);
    expect(response.body.goalMet).toBe(false);
  });
});
