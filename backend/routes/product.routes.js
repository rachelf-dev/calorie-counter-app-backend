const express = require('express');
const { body, param } = require('express-validator');

const productController = require('../controllers/product.controller');
const auth = require('../middleware/auth.middleware');
const validate = require('../middleware/validate.middleware');

const router = express.Router();

const createProductValidators = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('caloriesPer100g')
    .isFloat({ min: 0 })
    .withMessage('Calories per 100g must be a positive number'),
  body('servingSizes').isArray({ min: 1 }).withMessage('At least one serving size is required'),
  body('servingSizes.*.unit').trim().notEmpty().withMessage('Serving size unit is required'),
  body('servingSizes.*.weightInGrams')
    .isFloat({ min: 0 })
    .withMessage('Serving size weight must be a positive number'),
  body('imageUrl').optional({ values: 'falsy' }).isString().withMessage('Image URL must be a string'),
];

router.use(auth);

router.get('/', productController.getProducts);
router.get('/my', productController.getMyProducts);
router.post('/', createProductValidators, validate, productController.createProduct);
router.delete(
  '/:id',
  param('id').isMongoId().withMessage('Invalid product id'),
  validate,
  productController.deleteProduct
);

module.exports = router;
