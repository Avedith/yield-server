const express = require('express');
const router = express.Router();
const yield = require('../controllers/yield');

router.route('/chart/:pool').get(yield.getYieldHistory);

module.exports = router;
