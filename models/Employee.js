/** @format */

const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'name is required'],
	},
	email: {
		type: String,
		required: [true, 'email is required'],
	},
	phone: {
		type: Number,
	},
	photo: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'pictures',
	},
});

module.exports = mongoose.model('Employee', EmployeeSchema);
