/** @format */

const express = require('express');

const { getLogs } = require('../controllers/logs');

const router = express.Router();

router.route('/').get(getLogs);

module.exports = router;
