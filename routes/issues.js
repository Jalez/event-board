/** @format */

const express = require('express');

const {
	getIssues,
	getIssue,
	createIssue,
	updateIssue,
	deleteIssue,
} = require('../controllers/issues');

const router = express.Router();

router.route('/').get(getIssues).post(createIssue);

router.route('/:issueId').get(getIssue).put(updateIssue).delete(deleteIssue);

module.exports = router;
