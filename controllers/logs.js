/** @format */

const Log = require('../models/Issue');

/**
 * @description Controller. Gets all logs
 * @route GET api/logs
 * @access Private
 */
exports.getLogs = async (req, res) => {
	try {
		const logs = await Log.find();
		if (!logs) {
			res.status(400).json();
		}
		res.status(200).json(logs);
	} catch (error) {
		console.log(error);
	}
};

/**
 * @description Controller. Gets all logs
 * @route GET api/logs
 * @access Private
 */
exports.createLog = async (req, res) => {
	try {
	} catch (error) {}
};
