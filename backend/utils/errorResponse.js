/**
 * Helper class for handling errors.
 *
 * @format
 * @extends Error
 * @constructor (String, Number)
 */

class ErrorResponse extends Error {
	constructor(message, statusCode) {
		super(message);
		this.statusCode = statusCode;
	}
}

module.exports = ErrorResponse;
