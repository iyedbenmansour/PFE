const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactus.controller');

router.post('/api/contactus', contactController.createContact);

module.exports = router;
