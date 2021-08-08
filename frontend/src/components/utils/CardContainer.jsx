/** @format */

import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	paper: {
		backgroundColor: theme.palette.secondary.light,
		borderRadius: '2rem',
		margin: 2,
	},
	content: {
		width: 'auto',
		margin: 10,
	},
}));

const CardContainer = ({ children }) => {
	const { paper, content } = useStyles();

	const container = {
		elevation: 4,
		className: paper,
	};

	return (
		<Paper {...container}>
			<div className={content}>{children}</div>
		</Paper>
	);
};

export default CardContainer;
