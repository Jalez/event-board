/** @format */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = Schema({
	createdBy: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	text: {
		type: String,
		maxlength: [500, 'Text must be shorter than 500 letters.'],
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	modifiedAt: {
		type: Date,
	},
});

module.exports = mongoose.model('Comment', CommentSchema);
