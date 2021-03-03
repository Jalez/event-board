/** @format */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slugify = require('slugify');
const Comment = require('./Comment');

const IssueSchema = Schema({
	createdBy: {
		type: Schema.ObjectId,
		ref: 'User',
		required: true,
	},
	title: {
		type: String,
		required: true,
		unique: [true, 'There is already an issue by that name'],
	},
	slug: {
		type: String,
	},
	description: {
		type: String,
		required: true,
	},
	finished: {
		type: Boolean,
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

//Create an issue slug from the title before saving
IssueSchema.pre('save', function (next) {
	this.slug = slugify(this.title, { lower: true });
	next();
});

//Before removing, delete all comments of the issue
IssueSchema.pre('remove', async function () {
	console.log(this);
	console.log(`Comments being removed from issue ${this._id}`);
	await Comment.deleteMany({ issue: this._id });
});

module.exports = mongoose.model('Issue', IssueSchema);
