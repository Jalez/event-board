/** @format */

const express = require('express');

const {
	getIssues,
	getIssue,
	createIssue,
	updateIssue,
	deleteIssue,
} = require('../controllers/issues');
const findResource = require('../middleware/findResource');
const Issue = require('../models/Issue');

const router = express.Router();

router.route('/').get(getIssues).post(createIssue);

router
	.route('/:issueId')
	.all(findResource(Issue, 'issueId'))
	.get(getIssue)
	.put(updateIssue)
	.delete(deleteIssue);

module.exports = router;
