/** @format */
require('dotenv').config();
require('colors');

const express = require('express');
const morgan = require('morgan');

const mongoDB = require('./config/db');
const errorHandler = require('./middleware/error');

const app = express();
mongoDB();

//Dev loggin middleware (using a third party library):
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

//PUT and POST requests: We will use express' own body parser to parse the incoming data stream of the body into json form
app.use(express.json());

// This is where all the routes are.
app.use('/api', require('./router'));

//Whenever next is called in the routes, this errorHandler receives it.
app.use(errorHandler);

const server = app.listen(process.env.PORT, () => {
	console.log(
		`Server started. Listening at http://localhost:${process.env.PORT}`.cyan
	);
});

//Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
	console.log(`Server.js (Line 34): Error: ${err.message}`.red.underline);
	//Close server & exit process
	server.close(() => process.exit(1));
});
