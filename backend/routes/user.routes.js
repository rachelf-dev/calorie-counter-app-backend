const express = require('express');
const { body, param, validationResult } = require('express-validator');

const auth = require('../middleware/auth.middleware');
const admin = require('../middleware/admin.middleware');
const upload = require('../middleware/upload.middleware');
const userController = require('../controllers/user.controller');

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

const objectIdParam = param('id').isMongoId().withMessage('Invalid user id');

const profileUpdateValidators = [
  body('name').optional().trim().notEmpty().withMessage('Name cannot be empty').isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('calorieGoal').optional().isInt({ min: 500, max: 10000 }).withMessage('Calorie goal must be between 500 and 10000'),
  body('age').optional().isInt({ min: 1, max: 150 }).withMessage('Age must be between 1 and 150'),
  body('gender').optional().isIn(['male', 'female', 'other']).withMessage('Gender must be male, female, or other'),
  body('weight').optional().isFloat({ min: 1 }).withMessage('Weight must be at least 1 kg'),
  body('height').optional().isFloat({ min: 1 }).withMessage('Height must be at least 1 cm'),
];

router.use(auth);

router.get('/profile', userController.getProfile);

router.put('/profile', profileUpdateValidators, validate, userController.updateProfile);

router.put('/profile/image', upload.single('image'), userController.uploadProfileImage);

router.get('/', admin, userController.listUsers);

router.delete('/:id', admin, [objectIdParam], validate, userController.deleteUser);

router.put(
  '/:id/role',
  admin,
  [
    objectIdParam,
    body('role').isIn(['user', 'admin']).withMessage('Role must be user or admin'),
  ],
  validate,
  userController.updateUserRole
);

module.exports = router;
