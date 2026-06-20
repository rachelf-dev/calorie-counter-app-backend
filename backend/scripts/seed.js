require('dotenv').config();

const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const mongoose = require('mongoose');

const connectDB = require('../config/db');
const Product = require('../models/Product');

const CSV_PATH = path.join(__dirname, '..', 'data', 'products.csv');

const UNIT_COLUMNS = ['teaspoon', 'tablespoon', 'cup', 'slice', 'single'];

function buildServingSizes(row) {
  const servingSizes = [];

  for (const unit of UNIT_COLUMNS) {
    const rawValue = row[unit];

    if (rawValue === undefined || rawValue === null || String(rawValue).trim() === '') {
      continue;
    }

    const weightInGrams = Number(rawValue);

    if (!Number.isFinite(weightInGrams) || weightInGrams <= 0) {
      continue;
    }

    servingSizes.push({ unit, weightInGrams });
  }

  return servingSizes;
}

function readProductsFromCsv() {
  return new Promise((resolve, reject) => {
    const products = [];

    fs.createReadStream(CSV_PATH)
      .pipe(csv())
      .on('data', (row) => {
        const name = (row.name || '').trim();
        const caloriesPer100g = Number(row['calories per 100 grams']);

        if (!name || !Number.isFinite(caloriesPer100g)) {
          return;
        }

        products.push({
          name,
          caloriesPer100g,
          servingSizes: buildServingSizes(row),
          imageUrl: (row.url || '').trim() || undefined,
          createdBy: null,
        });
      })
      .on('end', () => resolve(products))
      .on('error', reject);
  });
}

async function seed() {
  if (!fs.existsSync(CSV_PATH)) {
    throw new Error(`CSV file not found at ${CSV_PATH}`);
  }

  await connectDB();

  const products = await readProductsFromCsv();

  if (products.length === 0) {
    console.log('No valid products found in CSV. Nothing to seed.');
    await mongoose.disconnect();
    return;
  }

  const { deletedCount } = await Product.deleteMany({ createdBy: null });
  console.log(`Removed ${deletedCount} existing global products`);

  const inserted = await Product.insertMany(products);
  console.log(`Seeded ${inserted.length} global products`);

  await mongoose.disconnect();
}

seed().catch(async (error) => {
  console.error('Failed to seed products:', error.message);

  try {
    await mongoose.disconnect();
  } catch {
    // Ignore disconnect errors after a failed seed.
  }

  process.exit(1);
});
