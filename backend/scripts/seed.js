const path = require('path');
const fs = require('fs');
const csv = require('csv-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '..', '.env') });

const Product = require('../models/Product');

const CSV_PATH = path.join(__dirname, '..', 'data', 'products.csv');

const SERVING_COLUMNS = ['teaspoon', 'tablespoon', 'cup', 'slice', 'single'];

function buildServingSizes(row) {
  const servingSizes = [];

  for (const unit of SERVING_COLUMNS) {
    const raw = row[unit];
    if (raw !== undefined && raw !== '') {
      const weightInGrams = parseFloat(raw);
      if (!isNaN(weightInGrams) && weightInGrams > 0) {
        servingSizes.push({ unit, weightInGrams });
      }
    }
  }

  servingSizes.push({ unit: 'grams', weightInGrams: 1 });

  return servingSizes;
}

function parseProducts(csvPath) {
  return new Promise((resolve, reject) => {
    const products = [];
    let skipped = 0;

    fs.createReadStream(csvPath)
      .pipe(csv())
      .on('data', (row) => {
        const caloriesPer100g = parseFloat(row['calories per 100 grams']);

        if (isNaN(caloriesPer100g) || caloriesPer100g <= 0) {
          skipped++;
          return;
        }

        const name = row['name'] ? row['name'].trim() : '';
        if (!name) {
          skipped++;
          return;
        }

        products.push({
          name,
          caloriesPer100g,
          imageUrl: row['url'] ? row['url'].trim() : undefined,
          servingSizes: buildServingSizes(row),
          createdBy: null,
        });
      })
      .on('end', () => resolve({ products, skipped }))
      .on('error', reject);
  });
}

async function seed() {
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    console.error('Error: MONGO_URI is missing from .env');
    process.exit(1);
  }

  await mongoose.connect(mongoUri);
  console.log('Connected to MongoDB');

  const deleted = await Product.deleteMany({ createdBy: null });
  console.log(`Deleted ${deleted.deletedCount} existing global products`);

  const { products, skipped } = await parseProducts(CSV_PATH);

  await Product.insertMany(products);

  console.log(`Skipped ${skipped} products (missing name or calories)`);
  console.log(`Seeded ${products.length} products successfully`);

  await mongoose.disconnect();
  process.exit(0);
}

seed().catch((err) => {
  console.error('Seed failed:', err.message);
  process.exit(1);
});
