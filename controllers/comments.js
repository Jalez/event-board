/** @format */

const Comment = require('../models/Comment');
const ErrorResponse = require('../utils/errorResponse');

/**
 * @description Controller. Gets all Comments. Everyone who uses the page should be able to access these, even if they are not logged in.
 * @route GET api/comments
 * @access Public
 */
exports.getComments = async (req, res, next) => {
	console.log('getComments controller');
	try {
		const issues = await Issue.find();
		res.status(200).json({ success: true, data: issues });
	} catch (error) {
		console.log(error);
	}
};

/**
 * @description Controller. Create a new comment. Only a user should be able to create a new one.
 * @route POST api/comments
 * @access Private
 */
exports.createComment = async (req, res) => {
	try {
		console.log('createComment controller');
	} catch (error) {}
};

/**
 * @description Controller. Get a single comment
 * @route GET api/comments/:id
 * @access Private
 */
exports.getComment = async (req, res) => {
	try {
		console.log('getComment controller');
	} catch (error) {}
};

/**
 * @description Controller. Update a single comment
 * @route PUT api/comments/:id
 * @access Private
 */
exports.updateComment = async (req, res) => {
	try {
		console.log('updateComment Controller');
	} catch (error) {}
};

/**
 * @description Controller. Delete a single comment
 * @route DELETE api/comments/:id
 * @access Private
 */
exports.deleteComment = async (req, res) => {
	try {
		console.log('deleteIssue controller');
	} catch (error) {}
};
