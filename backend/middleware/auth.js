/** @format */

const jwt = require('jsonwebtoken');
const asyncHandler = require('./async');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');

/**
 * Middleware. Protects the routes CRUD-request to which it is assigned as middleware.
 */
exports.protect = asyncHandler(async (req, res, next) => {
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		//Set token from bearer token in header
		token = req.headers.authorization.split(' ')[1];
	}

	// Make sure token exists
	if (!token) {
		return next(new ErrorResponse('Not authorized to access this route'), 401);
	}

	try {
		// Verify token
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		req.user = await User.findById(decoded.id);

		next();
	} catch (error) {
		return next(new ErrorResponse('Not authorized to access this route'), 401);
	}
});

/** Grant access to specific roles */
exports.authorize = (...roles) => (req, res, next) => {
	if (!roles.includes(req.user.role)) {
		return next(
			new ErrorResponse(`${req.user.role} not authorized to access this route`),
			403
		);
	}
	next();
};
