const { Type } = require('@google/genai');

const Product = require('../models/Product');
const DailyLog = require('../models/DailyLog');
const {
  getTodayDateString,
  getOrCreateLogForDate,
} = require('../controllers/log.controller');

const functionDeclarations = [
  {
    name: 'searchProducts',
    description:
      'Search for food products by name. Returns matching products with calories and available serving units.',
    parameters: {
      type: Type.OBJECT,
      properties: {
        query: {
          type: Type.STRING,
          description: 'Product name or partial name to search for',
        },
      },
      required: ['query'],
    },
  },
  {
    name: 'addLogItem',
    description:
      'Add a food product to the user daily basket/log for today. Use searchProducts first if you need to find the product or its valid units.',
    parameters: {
      type: Type.OBJECT,
      properties: {
        productName: {
          type: Type.STRING,
          description: 'Exact or approximate name of the product',
        },
        unit: {
          type: Type.STRING,
          description: 'Serving unit (e.g. cup, slice, tablespoon, grams)',
        },
        quantity: {
          type: Type.NUMBER,
          description: 'How many units to add (must be greater than 0)',
        },
      },
      required: ['productName', 'unit', 'quantity'],
    },
  },
  {
    name: 'removeLogItem',
    description: 'Remove a product from the user daily basket/log for today by product name.',
    parameters: {
      type: Type.OBJECT,
      properties: {
        productName: {
          type: Type.STRING,
          description: 'Name of the product to remove from today log',
        },
      },
      required: ['productName'],
    },
  },
  {
    name: 'createProduct',
    description: 'Create a new private product for the user (or global if admin).',
    parameters: {
      type: Type.OBJECT,
      properties: {
        name: {
          type: Type.STRING,
          description: 'Product name',
        },
        caloriesPer100g: {
          type: Type.NUMBER,
          description: 'Calories per 100 grams',
        },
        servingSizes: {
          type: Type.ARRAY,
          description: 'Available serving sizes for the product',
          items: {
            type: Type.OBJECT,
            properties: {
              unit: {
                type: Type.STRING,
                description: 'Unit name (e.g. cup, slice, grams)',
              },
              weightInGrams: {
                type: Type.NUMBER,
                description: 'Weight of one unit in grams',
              },
            },
            required: ['unit', 'weightInGrams'],
          },
        },
      },
      required: ['name', 'caloriesPer100g', 'servingSizes'],
    },
  },
  {
    name: 'deleteProduct',
    description: 'Delete a product owned by the user (or any product if admin) by name.',
    parameters: {
      type: Type.OBJECT,
      properties: {
        productName: {
          type: Type.STRING,
          description: 'Name of the product to delete',
        },
      },
      required: ['productName'],
    },
  },
  {
    name: 'getDailySummary',
    description:
      'Get a summary of the user daily calorie log for today including total consumed, target, goal status, and items.',
    parameters: {
      type: Type.OBJECT,
      properties: {},
    },
  },
];

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

async function findProductByName(userId, productName) {
  const trimmed = productName?.trim();

  if (!trimmed) {
    return null;
  }

  const escaped = escapeRegex(trimmed);
  const regex = new RegExp(`^${escaped}$`, 'i');

  const products = await Product.find({
    name: regex,
    $or: [{ createdBy: null }, { createdBy: userId }],
  }).sort({ name: 1 });

  if (products.length) {
    return products[0];
  }

  const partialRegex = new RegExp(escaped, 'i');

  return Product.findOne({
    name: partialRegex,
    $or: [{ createdBy: null }, { createdBy: userId }],
  }).sort({ name: 1 });
}

function buildToolExecutors(user) {
  return {
    async searchProducts({ query }) {
      try {
        const products = await Product.findGlobalAndUserProducts(user.id, query || '');

        return {
          products: products.map((product) => ({
            id: product._id.toString(),
            name: product.name,
            caloriesPer100g: product.caloriesPer100g,
            servingSizes: product.servingSizes.map((size) => ({
              unit: size.unit,
              weightInGrams: size.weightInGrams,
            })),
          })),
        };
      } catch (error) {
        return { error: error.message || 'Failed to search products' };
      }
    },

    async addLogItem({ productName, unit, quantity }) {
      try {
        if (!productName || !unit || !quantity || quantity <= 0) {
          return { error: 'productName, unit, and a positive quantity are required' };
        }

        const date = getTodayDateString();
        const log = await getOrCreateLogForDate(user.id, date);

        if (!log) {
          return { error: 'User not found' };
        }

        const product = await findProductByName(user.id, productName);

        if (!product) {
          return { error: `Product not found: ${productName}` };
        }

        const servingSize = product.servingSizes.find(
          (size) => size.unit.toLowerCase() === String(unit).trim().toLowerCase()
        );

        if (!servingSize) {
          return {
            error: `Invalid unit "${unit}" for product "${product.name}"`,
            availableUnits: product.servingSizes.map((size) => size.unit),
          };
        }

        const calories = Product.calculateCalories(
          quantity,
          servingSize.weightInGrams,
          product.caloriesPer100g
        );

        log.items.push({
          productId: product._id,
          productName: product.name,
          unit: servingSize.unit,
          quantity,
          calories,
        });

        log.totalCaloriesConsumed += calories;
        await log.save();

        return {
          message: `Added ${quantity} ${servingSize.unit} of ${product.name}`,
          caloriesAdded: calories,
          totalCaloriesConsumed: log.totalCaloriesConsumed,
          targetCalories: log.targetCalories,
        };
      } catch (error) {
        return { error: error.message || 'Failed to add item to log' };
      }
    },

    async removeLogItem({ productName }) {
      try {
        if (!productName?.trim()) {
          return { error: 'productName is required' };
        }

        const date = getTodayDateString();
        const log = await DailyLog.findOne({ userId: user.id, date });

        if (!log) {
          return { error: 'Today log not found' };
        }

        const normalizedName = productName.trim().toLowerCase();
        const item = log.items.find(
          (entry) => entry.productName.toLowerCase() === normalizedName
        );

        if (!item) {
          const partialMatch = log.items.find((entry) =>
            entry.productName.toLowerCase().includes(normalizedName)
          );

          if (!partialMatch) {
            return { error: `Item not found in today log: ${productName}` };
          }

          log.totalCaloriesConsumed -= partialMatch.calories;
          partialMatch.deleteOne();
          await log.save();

          return {
            message: `Removed ${partialMatch.productName} from today log`,
            totalCaloriesConsumed: log.totalCaloriesConsumed,
          };
        }

        log.totalCaloriesConsumed -= item.calories;
        item.deleteOne();
        await log.save();

        return {
          message: `Removed ${productName} from today log`,
          totalCaloriesConsumed: log.totalCaloriesConsumed,
        };
      } catch (error) {
        return { error: error.message || 'Failed to remove item from log' };
      }
    },

    async createProduct({ name, caloriesPer100g, servingSizes, imageUrl }) {
      try {
        if (!name?.trim()) {
          return { error: 'Product name is required' };
        }

        if (caloriesPer100g == null || caloriesPer100g < 0) {
          return { error: 'caloriesPer100g must be a non-negative number' };
        }

        if (!Array.isArray(servingSizes) || servingSizes.length === 0) {
          return { error: 'At least one serving size is required' };
        }

        const createdBy = user.role === 'admin' ? null : user.id;

        const product = await Product.create({
          name: name.trim(),
          caloriesPer100g,
          servingSizes,
          imageUrl: imageUrl || undefined,
          createdBy,
        });

        return {
          message: `Created product ${product.name}`,
          product: {
            id: product._id.toString(),
            name: product.name,
            caloriesPer100g: product.caloriesPer100g,
            servingSizes: product.servingSizes,
          },
        };
      } catch (error) {
        return { error: error.message || 'Failed to create product' };
      }
    },

    async deleteProduct({ productName }) {
      try {
        if (!productName?.trim()) {
          return { error: 'productName is required' };
        }

        const product = await findProductByName(user.id, productName);

        if (!product) {
          return { error: `Product not found: ${productName}` };
        }

        const isOwner = product.createdBy?.toString() === user.id;
        const isAdmin = user.role === 'admin';

        if (!isAdmin && !isOwner) {
          return { error: 'You can only delete your own products' };
        }

        await product.deleteOne();

        return { message: `Deleted product ${product.name}` };
      } catch (error) {
        return { error: error.message || 'Failed to delete product' };
      }
    },

    async getDailySummary() {
      try {
        const date = getTodayDateString();
        const log = await getOrCreateLogForDate(user.id, date);

        if (!log) {
          return { error: 'User not found' };
        }

        return {
          date: log.date,
          targetCalories: log.targetCalories,
          totalCaloriesConsumed: log.totalCaloriesConsumed,
          goalMet: log.totalCaloriesConsumed <= log.targetCalories,
          items: log.items.map((item) => ({
            productName: item.productName,
            unit: item.unit,
            quantity: item.quantity,
            calories: item.calories,
          })),
        };
      } catch (error) {
        return { error: error.message || 'Failed to get daily summary' };
      }
    },
  };
}

module.exports = {
  functionDeclarations,
  buildToolExecutors,
};
