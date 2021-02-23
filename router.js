/** @format */

const express = require('express');
const router = express.Router();

router.route('/logs', require('./routes/logs'));

module.exports = router;
