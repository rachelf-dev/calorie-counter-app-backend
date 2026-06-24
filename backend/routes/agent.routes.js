const express = require('express');
const { body } = require('express-validator');

const agentController = require('../controllers/agent.controller');
const auth = require('../middleware/auth.middleware');
const validate = require('../middleware/validate.middleware');

const router = express.Router();

const chatValidators = [
  body('message').trim().notEmpty().withMessage('Message is required'),
  body('history').optional().isArray().withMessage('History must be an array'),
  body('history.*.role')
    .optional()
    .isIn(['user', 'agent'])
    .withMessage('History role must be user or agent'),
  body('history.*.content').optional().isString().withMessage('History content must be a string'),
];

router.use(auth);

router.post('/chat', chatValidators, validate, agentController.chat);

module.exports = router;
