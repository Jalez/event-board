/** @format */

const mongoose = require('mongoose');
const db = process.env.MONGO_URI;

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log(
			`MongoDB connected: ${conn.connection.host}`.yellow.underline.bold
		);
	} catch (error) {
		console.log(error.message);
		process.exit(1);
	}
};

module.exports = connectDB;
