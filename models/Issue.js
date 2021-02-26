/** @format */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IssueSchema = Schema({
	createdBy: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	solved: {
		type: Boolean,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	assignedTo: [
		{
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	],
});

//Create an issue slug from the title
BootcampSchema.pre('save', function (next) {
	this.slug = slugify(this.name, { lower: true });
	next();
});

module.exports = mongoose.model('Log', LogSchema);
