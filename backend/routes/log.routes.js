const express = require('express');
const { body, param, validationResult } = require('express-validator');

const auth = require('../middleware/auth.middleware');
const {
  getToday,
  getLogByDate,
  getHistory,
  addToBasket,
  removeFromBasket,
} = require('../controllers/log.controller');

const router = express.Router();

function handleValidationErrors(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: errors.array()[0].msg,
      errors: errors.array(),
    });
  }

  return next();
}

const validateAddToBasket = [
  body('productId').isMongoId().withMessage('Valid productId is required'),
  body('unit').trim().notEmpty().withMessage('Unit is required'),
  body('quantity')
    .isFloat({ min: 0.01 })
    .withMessage('Quantity must be greater than 0'),
  handleValidationErrors,
];

const validateDateParam = [
  param('date')
    .matches(/^\d{4}-\d{2}-\d{2}$/)
    .withMessage('Date must be in YYYY-MM-DD format'),
  handleValidationErrors,
];

const validateItemIdParam = [
  param('itemId').isMongoId().withMessage('Valid itemId is required'),
  handleValidationErrors,
];

router.get('/today', auth, getToday);
router.get('/history', auth, getHistory);
router.post('/add', auth, validateAddToBasket, addToBasket);
router.delete('/item/:itemId', auth, validateItemIdParam, removeFromBasket);
router.get('/:date', auth, validateDateParam, getLogByDate);

module.exports = router;
