/** @format */

const express = require('express');
const router = express.Router();

router.use('/issues', require('./routes/issues'));
router.use('/users', require('./routes/users'));
router.use('/comments', require('./routes/comments'));

module.exports = router;
