/** @format */

const Log = require('../models/Log');

/**
 * @description Controller. Gets all logs
 * @route GET api/logs
 * @access Private
 */
exports.getLogs = async (req, res) => {
	try {
		const logs = await Log.find();
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
