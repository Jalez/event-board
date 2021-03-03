/** @format */

const express = require('express');
const {
	getComments,
	getComment,
	createComment,
	updateComment,
	deleteComment,
} = require('../controllers/comments');
const findResource = require('../middleware/findResource');
const Comment = require('../models/Comment');

const router = express.Router();

router.route('/').get(getComments).post(createComment);

router
	.route('/:commentId')
	.all(findResource(Comment, 'commentId'))
	.get(getComment)
	.put(updateComment)
	.delete(deleteComment);

module.exports = router;
