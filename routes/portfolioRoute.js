const express = require('express');
const { sendEmailController } = require('../contollers/PortfolioController');

// router obj
const router = express.Router();

// routes
router.post('/sendEmail', sendEmailController);

// exporting router
module.exports = router;