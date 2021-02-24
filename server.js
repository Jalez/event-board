/** @format */
require('dotenv').config();

const express = require('express');
const mongoDB = require('./config/db');
const errorHandler = require('./middleware/error');

const app = express();
const connectedMongo = mongoDB();

// This is where all the routes are.
app.use('/api', require('./router'));

//Whenever next is called in the routes, this errorHandler receives
app.use(errorHandler);

app.listen(process.env.PORT, () => {
	console.log(`Listening at http://localhost:${process.env.PORT}`);
});
