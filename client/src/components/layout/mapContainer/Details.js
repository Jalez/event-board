/** @format */

import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
	root: {
		background: 'white',
		// border: '2px solid ',
		borderRadius: 8,
		position: 'absolute',
		bottom: 0,
		left: 0,
		fontSize: '1.5em',
		width: 200,
		zIndex: 9999,
		padding: 12,
		boxShadow: '1px 0px 10px rgba(0, 0, 0, 0.8)',
	},
});

const Details = ({ isVisible, innerText }) => {
	const classes = useStyles();
	const { title, intro, madeBy, infoLink } = innerText;

	if (isVisible)
		return (
			<div className={classes.root}>
				<h3>{title}</h3>
				<p>{intro}</p>
				<p>Made by: {madeBy}</p>
			</div>
		);
	else return <></>;
};

export default Details;
