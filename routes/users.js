/** @format */

const express = require('express');

const {
	getUsers,
	createUser,
	getUser,
	updateUser,
	deleteUser,
} = require('../controllers/users');

const router = express.Router();

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
