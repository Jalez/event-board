/** @format */

const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

/**
 * @description Gets all users
 * @path GET api/users
 * @access Private
 *
 * @param {Request} res
 * @param {*} req
 * @param {*} next
 */

exports.getUsers = async (req, res, next) => {
	try {
		console.log('getUsers controller');
		const users = await User.find();
		res.status(200).json({ success: true, data: users });
	} catch (error) {
		next(new ErrorResponse(error, 400));
	}
};
/**
 * @description Create a new user
 * @path POST api/users
 * @access Public
 *
 * @param {Request} req
 * @param {Response} res
 * @param {} next
 */
exports.createUser = async (req, res, next) => {
	try {
		const user = await User.create(req.body);
		console.log('createUser controller');
		// console.log('Body: ' + body);
		res.status(200).json({ success: true, data: user });
	} catch (error) {
		next(new ErrorResponse(error, 400));
	}
};

/**
 * @description Get a single user
 * @path GET api/users/:id
 * @access Private
 *
 * @param {Response} res
 * @param {Request} req
 * @param {} next
 */

exports.getUser = async (req, res, next) => {
	try {
		console.log('getUser controller');
		res.status(200).json({ success: true, data: 'test' });
	} catch (error) {
		next(new ErrorResponse(error, 400));
	}
};

/**
 * @description Update a single user
 * @path PUT api/users/:id
 * @access Private
 *
 * @param {Response} res
 * @param {Request} req
 * @param {Next} next
 */
exports.updateUser = async (req, res, next) => {
	try {
		console.log('updateUser controller');
		res.status(200).json({ success: true, data: 'test' });
	} catch (error) {
		next(new ErrorResponse(error, 400));
	}
};

/**
 * @description Delete a single user
 * @path DELETE api/users/:id
 * @access Public
 *
 * @param {Response} res
 * @param {Request} req
 * @param {} next
 */
exports.deleteUser = async (req, res, next) => {
	try {
		console.log('deleteUser controller');
		res.status(200).json({ success: true, data: 'test' });
	} catch (error) {
		next(new ErrorResponse(error, 400));
	}
};
