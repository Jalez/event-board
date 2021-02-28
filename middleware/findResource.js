/** @format */

const findResource = (Method, id) => async (req, res, next) => {
	const oldResource = await Method.findById(req.params[id]);
	if (!oldResource) {
		return res
			.status(404)
			.json({ success: false, msg: "Can't find the resource." });
	}
	req.oldResource = oldResource;
	next();
};

module.exports = findResource;
