/** @format */

const advancedResults = (model, populate) => async (req, res, next) => {
	let query;

	//Copy req.query
	const reqQuery = { ...req.query };

	//Fields to exclude:
	const removeFields = ['select', 'sort', 'limit', 'page'];

	//Loop over removeFields and delete them from reqQuery
	removeFields.forEach((param) => delete reqQuery[param]);

	//Create query string
	let queryString = JSON.stringify(reqQuery);

	//Create operators ($gt, $gte, etc)
	queryString = queryString.replace(
		/\b(gt|gte|lt|lte|in)\b/g,
		(match) => `$${match}`
	);

	//Finding resource
	query = model.find(JSON.parse(queryString));
	let allFound = query;
	allFound = await allFound;

	//Select fields
	if (req.query.select) {
		const fields = req.query.select.split(',').join(' ');
		query = query.select(fields);
	}

	//Sort found
	if (req.query.sort) {
		const sortBy = req.query.sort.split(',').join(' ');
		query = query.sort(sortBy);
	} else {
		query = query.sort('-createdAt');
	}

	//Pagination = Sivutus
	//parseIntin eka arvo sivu, toinen arvo radix, joka aika helppo kun kattoo esimerkin (eli älä pelästy): https://en.wikipedia.org/wiki/Radix
	const page = parseInt(req.query.page, 10) || 1; //Page 1 default.
	const limit = parseInt(req.query.limit, 10) || 1; //Limit 1 default.

	//Valitaan kuinka monta skipataan tässä haussa:
	const startIndex = (page - 1) * limit; //Esim jos sivu = 1, niin ei skipata yhtään arvoa. Eka index 0
	const endIndex = page * limit; //Jos limiitti on 10, niin silloin viimeinen indeksi on 10.
	const total = await model.countDocuments();

	query = query.skip(startIndex).limit(limit);

	if (populate) {
		query = query.populate(populate);
	}

	//Executing query
	const results = await query;

	//Pagination result
	const pagination = {};

	if (endIndex < total) {
		pagination.next = {
			page: page + 1,
			limit,
		};
	}
	if (startIndex > 0) {
		pagination.prev = {
			page: page - 1,
			limit,
		};
	}

	res.advancedResults = {
		success: true,
		allFound: allFound.length,
		onThisPage: results.length,
		pagination,
		data: results,
	};

	//Since this is middleware, we call next in the end.
	next();
};

module.exports = advancedResults;
