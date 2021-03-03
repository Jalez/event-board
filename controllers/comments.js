/** @format */

const Comment = require('../models/Comment');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

/**
 * @description Controller. Gets all Comments. Everyone who uses the page should be able to access these, even if they are not logged in.
 * @route GET api/comments
 * @access Public
 */
exports.getComments = asyncHandler(async (req, res, next) => {
	const comments = await Comment.find();
	res.status(200).json({ success: true, data: comments });
});

/**
 * @description Controller. Create a new comment. Only a user should be able to create a new one.
 * @route POST api/comments
 * @access Private
 */
exports.createComment = asyncHandler(async (req, res, next) => {
	const newComment = await Comment.create(req.body);
	res.status(201).json({ success: true, data: newComment });
});

/**
 * @description Controller. Get a single comment to (for example) modify it.
 * @route GET api/comments/:id
 * @access Private
 */
exports.getComment = asyncHandler(async (req, res, next) => {
	res.status(200).json({ success: true, data: req.oldResource });
});

/**
 * @description Controller. Update a single comment
 * @route PUT api/comments/:id
 * @access Private
 */
exports.updateComment = asyncHandler(async (req, res, next) => {
	const newComment = req.body;
	newComment.modifiedAt = new Date(Date.now());

	const updatedComment = await Comment.findByIdAndUpdate(
		req.params.commentId,
		newComment,
		{
			runValidators: true,
			new: true,
		}
	);
	res.status(200).json({ success: true, data: updatedComment });
});

/**
 * @description Controller. Delete a single comment
 * @route DELETE api/comments/:id
 * @access Private
 */
exports.deleteComment = asyncHandler(async (req, res, next) => {
	req.oldResource.remove();
	res.status(200).json({ success: true });
});
