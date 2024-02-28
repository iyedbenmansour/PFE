const express = require('express');
const router = express.Router();
const { loginUser } = require('../controllers/auth.controller');

// Login endpoint
router.post('/login', loginUser);

module.exports = router;
