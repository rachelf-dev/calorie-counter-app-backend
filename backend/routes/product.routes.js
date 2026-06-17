const express = require('express');
const { body, validationResult } = require('express-validator');

const auth = require('../middleware/auth.middleware');
const {
  getProducts,
  getMyProducts,
  createProduct,
  deleteProduct,
} = require('../controllers/product.controller');

const router = express.Router();

const validateCreateProduct = [
  body('name').trim().notEmpty().withMessage('Product name is required'),
  body('caloriesPer100g')
    .isFloat({ min: 0 })
    .withMessage('caloriesPer100g must be a number greater than or equal to 0'),
  body('servingSizes')
    .isArray({ min: 1 })
    .withMessage('At least one serving size is required'),
  body('servingSizes.*.unit').trim().notEmpty().withMessage('Each serving size must have a unit'),
  body('servingSizes.*.weightInGrams')
    .isFloat({ min: 0 })
    .withMessage('Each serving size must have a valid weightInGrams'),
  body('imageUrl').optional({ values: 'falsy' }).trim(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: errors.array()[0].msg,
        errors: errors.array(),
      });
    }

    return next();
  },
];

router.get('/my', auth, getMyProducts);
router.get('/', auth, getProducts);
router.post('/', auth, validateCreateProduct, createProduct);
router.delete('/:id', auth, deleteProduct);

module.exports = router;
