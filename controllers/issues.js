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
 * @route GET api/issues/:issueId
 * @access Private
 */
exports.getIssue = asyncHandler(async (req, res, next) => {
	const issue = await Issue.findById(req.params.issueId);
	res.status(200).json({
		success: true,
		data: issue,
	});
});

/**
 * @description Controller. Update a single issue
 * @route PUT api/issues/:issueId
 * @access Private
 */
exports.updateIssue = asyncHandler(async (req, res, next) => {
	const oldResource = req.oldResource;
	const update = req.body;
	update.modifiedAt = new Date(Date.now());

	const updatedResource = await Issue.findByIdAndUpdate(
		req.params.issueId,
		update,
		{
			new: true,
			runValidators: true,
		}
	);

	res.status(200).json({ success: true, data: updatedResource });
});

/**
 * @description Controller. Delete a single issue
 * @route DELETE api/issues/:issueId
 * @access Private
 */
exports.deleteIssue = asyncHandler(async (req, res, next) => {
	req.oldResource.remove();
});
