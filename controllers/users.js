/** @format */

const asyncHandler = require('../middleware/async');
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
exports.createUser = asyncHandler(async (req, res, next) => {
	const user = await User.create(req.body);
	res.status(200).json({ success: true, data: user });
});

/**
 * @description Get a single user
 * @path GET api/users/:userId
 * @access Private
 *
 * @param {Response} res
 * @param {Request} req
 * @param {} next
 */

exports.getUser = asyncHandler(async (req, res, next) => {
	const user = await User.findById(req.params.userId);
	res.status(200).json({ success: true, data: user });
});

/**
 * @description Update a single user
 * @path PUT api/users/:userId
 * @access Private
 *
 * @param {Response} res
 * @param {Request} req
 * @param {Next} next
 */
exports.updateUser = asyncHandler(async (req, res, next) => {
	const updatedUser = await User.updateOne(req.oldResource, req.body, {
		new: true,
		runValidators: true,
	});
	res.status(200).json({ success: true, data: updatedUser });
});

/**
 * @description Delete a single user
 * @path DELETE api/users/:userId
 * @access Public
 *
 * @param {Response} res
 * @param {Request} req
 * @param {} next
 */
exports.deleteUser = asyncHandler(async (req, res, next) => {
	await User.deleteOne(req.oldResource);
	res.status(200).json({ success: true });
});
