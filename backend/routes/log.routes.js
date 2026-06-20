const express = require('express');
const { body, param } = require('express-validator');

const logController = require('../controllers/log.controller');
const auth = require('../middleware/auth.middleware');
const validate = require('../middleware/validate.middleware');

const router = express.Router();

const dateValidator = param('date')
  .matches(/^\d{4}-\d{2}-\d{2}$/)
  .withMessage('Date must be in YYYY-MM-DD format');

const addToBasketValidators = [
  body('productId').isMongoId().withMessage('A valid product id is required'),
  body('unit').trim().notEmpty().withMessage('Unit is required'),
  body('quantity').isFloat({ gt: 0 }).withMessage('Quantity must be greater than 0'),
];

router.use(auth);

router.get('/today', logController.getToday);
router.get('/history', logController.getHistory);
router.get('/:date', dateValidator, validate, logController.getLogByDate);
router.post('/add', addToBasketValidators, validate, logController.addToBasket);
router.delete(
  '/item/:itemId',
  param('itemId').isMongoId().withMessage('Invalid item id'),
  validate,
  logController.removeFromBasket
);

module.exports = router;
