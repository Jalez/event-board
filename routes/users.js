/** @format */

const express = require('express');

const {
	getUsers,
	createUser,
	getUser,
	updateUser,
	deleteUser,
} = require('../controllers/users');

const findResource = require('../middleware/findResource');
const User = require('../models/User');

const router = express.Router();

router.route('/').get(getUsers).post(createUser);

router
	.route('/:userId')
	.all(findResource(User, 'userId'))
	.get(getUser)
	.put(updateUser)
	.delete(deleteUser);

module.exports = router;
