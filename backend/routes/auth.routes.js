const express = require('express');
const { body, validationResult } = require('express-validator');
const authController = require('../controllers/auth.controller');

const router = express.Router();

function validate(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: 'Validation failed',
      errors: errors.array(),
    });
  }

  return next();
}

router.post(
  '/register',
  [
    body('name').trim().notEmpty().withMessage('Name is required').isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
    body('email').trim().isEmail().withMessage('Please provide a valid email address').normalizeEmail(),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    body('calorieGoal').optional().isInt({ min: 500, max: 10000 }).withMessage('Calorie goal must be between 500 and 10000'),
    body('age').optional().isInt({ min: 1, max: 150 }).withMessage('Age must be between 1 and 150'),
    body('gender').optional().isIn(['male', 'female', 'other']).withMessage('Gender must be male, female, or other'),
    body('weight').optional().isFloat({ min: 1 }).withMessage('Weight must be at least 1 kg'),
    body('height').optional().isFloat({ min: 1 }).withMessage('Height must be at least 1 cm'),
  ],
  validate,
  authController.register
);

router.post(
  '/login',
  [
    body('email').trim().isEmail().withMessage('Please provide a valid email address').normalizeEmail(),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  validate,
  authController.login
);

module.exports = router;
