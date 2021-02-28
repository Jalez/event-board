/** @format */

const asyncHandler = require('../middleware/async');
const Issue = require('../models/Issue');
const ErrorResponse = require('../utils/errorResponse');

/**
 * @description Controller. Gets all issues. Everyone who uses the page should be able to access these, even if they are not logged in.
 * @route GET api/issues
 * @access Public
 */
exports.getIssues = asyncHandler(async (req, res, next) => {
	console.log('getIssues controller');
	const issues = await Issue.find();
	res.status(200).json({ success: true, data: issues });
});

/**
 * @description Controller. Create a new issue
 * @route POST api/issues
 * @access Private
 */
exports.createIssue = asyncHandler(async (req, res, next) => {
	const newIssue = await Issue.create(req.body);
	res.status(201).json({ success: true, data: newIssue });
});

/**
 * @description Controller. Get a single issue
 * @route GET api/issues/:id
 * @access Private
 */
exports.getIssue = async (req, res) => {
	try {
		console.log('getIssue controller');
	} catch (error) {}
};

/**
 * @description Controller. Update a single issue
 * @route PUT api/issues/:id
 * @access Private
 */
exports.updateIssue = async (req, res) => {
	try {
		console.log('updateIssue Controller');
	} catch (error) {}
};

/**
 * @description Controller. Delete a single issue
 * @route DELETE api/issues/:id
 * @access Private
 */
exports.deleteIssue = async (req, res) => {
	try {
		console.log('createIssue controller');
	} catch (error) {}
};
