const express = require('express');
const router = express.Router();
const controller = require('../controllers/authController');
const protect = require('../middleware/auth');

router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/profile', protect, controller.getProfile);
router.put('/profile', protect, controller.updateProfile);

module.exports = router;
