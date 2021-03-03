/** @format */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IssueSchema = Schema({
	createdBy: {
		type: Schema.ObjectId,
		ref: 'User',
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	slug: {
		type: String,
	},
	description: {
		type: String,
		required: true,
	},
	progress: {
		type: Boolean,
		required: true,
	},
	commentSection: {
		type: Schema.ObjectId,
		ref: 'CommentSection',
	},
	assignedTo: [
		{
			type: Schema.ObjectId,
			ref: 'User',
		},
	],
	createdAt: {
		type: Date,
		default: Date.now,
	},
	numberOfChildren: {
		type: Number,
	},
	modifiedAt: {
		type: Date,
	},
});

//Create an issue slug from the title
IssueSchema.pre('save', function (next) {
	this.slug = slugify(this.name, { lower: true });
	next();
});

module.exports = mongoose.model('Issue', IssueSchema);
