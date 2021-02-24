/** @format */

const mongoose = require('mongoose');

const LogSchema = mongoose.Schema({
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'employees',
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
	assignedTo: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'employees',
	},
});

module.exports = mongoose.model('Log', LogSchema);
