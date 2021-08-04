/** @format */

import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles(() => ({
	in: {
		position: 'static',
		width: '100%',
		height: '60px',
	},
	enter: {
		animation: `$slideIn 1s linear`,
	},
	exit: {
		position: 'static',
		width: '100%',
		height: 0,
	},
	out: {
		animation: `$slideOut 1s linear`,
	},
	'@keyframes slideOut': {
		'0%': {
			height: '60px',
		},
		'100%': {
			height: '0px',
		},
	},
	'@keyframes slideIn': {
		'0%': {
			height: '0px',
		},
		'100%': {
			height: '60px',
		},
	},
}));

const Bulldozer = ({ itemToPush, children }) => {
	const [enterOrExit, setEnterOrExit] = useState(null);
	const [firstRender, setFirstRender] = useState(true);

	useEffect(() => {
		if (!firstRender) setEnterOrExit(itemToPush ? 'open' : 'close');
		return () => {
			setFirstRender(false);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [itemToPush]);

	useEffect(() => {
		let timeout;
		if (enterOrExit) {
			timeout = setTimeout(() => {
				setEnterOrExit(null);
			}, 1500);
		}
		return () => {
			clearTimeout(timeout);
		};
	}, [enterOrExit]);

	const classes = useStyles();

	return (
		<div
			className={clsx({
				[classes.in]: itemToPush,
				[classes.enter]: enterOrExit === 'open',
				[classes.exit]: enterOrExit === 'close',
				[classes.out]: !itemToPush,
			})}>
			{children}
		</div>
	);
};

export default Bulldozer;
