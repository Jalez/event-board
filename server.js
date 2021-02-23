/** @format */
require('dotenv').config();

const express = require('express');
const mongoDB = require('./config/db');

const app = express();
const connectedMongo = mongoDB();

app.use('/api', require('./router'));

app.listen(process.env.PORT, () => {
	console.log(`Listening at http://localhost:${process.env.PORT}`);
});
