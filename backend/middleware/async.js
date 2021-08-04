/** @format */

/**
 * Wrapper function to resolve the async middleware (controller) and to catch errors. Needs to be wrapped around the async function. If we didn't use this, we'd have to use try-catch on every single controller to catch errors should they occur. So the purpose of this middleware is to simply make the code cleaner.
 *
 * @param {Function} fn
 */
const asyncHandler = (fn) => {
	return (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncHandler;
