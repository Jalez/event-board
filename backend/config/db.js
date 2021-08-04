/** @format */

const mongoose = require('mongoose');
const db = process.env.MONGO_URI;

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(db, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		});
		console.log(`MongoDB connected: ${conn.connection.host}`.yellow.underline);
	} catch (error) {
		console.log(error.message);
		process.exit(1);
	}
};

module.exports = connectDB;
