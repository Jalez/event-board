/** @format */

const mongoose = require('mongoose');
const jsw = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'name is required'],
	},
	email: {
		type: String,
		match: [
			/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
			'Please add a valid email',
		],
		required: [true, 'email is required'],
		unique: [true, 'Email already in use'],
	},
	photo: {
		type: mongoose.Schema.ObjectId,
		ref: 'pictures',
	},
	role: {
		type: String,
		enum: ['employer', 'employee', 'developer'],
		default: 'user',
	},
	phone: {
		type: Number,
	},
	password: {
		type: String,
		required: [true, 'Please add a password'],
		minlenght: 6,
		select: false, // By using select false, it's not going to show the password in an http request.
	},
	resetPasswordToken: {
		type: String,
	},
	resetPasswordExpire: {
		type: Date,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

//Encrypt password using bcrypt
UserSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next();
	}
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

/**
 * @description Sign in JSONWebToken and return value
 * This is a method of userSchema, meaning that it can be called by the document that has been created. If we wanted to call this on the model of the document, this method would have to be static instead.
 */
UserSchema.methods.getSignedJwtToken = function () {
	return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRE,
	});
};

/**
 * Match user entered password to hashed password in database
 *
 * @param {String} enteredPassword
 */
UserSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

//Generate and hash password token
UserSchema.methods.getResetpasswordToken = function () {
	//Generate token
	const resetToken = crypto.randomBytes(20).toString('hex');
	// Hash token and set to resetPasswordToken field
	this.resetPasswordToken = crypto
		.createHash('sha256')
		.update(resetToken)
		.digest('hex');

	//Set expire
	this.resetPasswordExpire = Date.now() + 10 * 60 * 10000;

	return resetToken;
};

module.exports = mongoose.model('User', UserSchema);
