/** @format */

import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
	hideOverflow: {
		overflow: 'hidden',
	},
	box: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		overflow: 'hidden',
	},
	background: {
		backgroundColor: theme.palette.primary.main,
		color: 'primary',
		width: '100%',
		height: '100%',
		borderRadius: '0%',
		zIndex: 100,
		opacity: 0.9,
	},
	backgroundAfterExit: (props) => ({
		height: '0%',
		width: '0%',
	}),
	backgroundExiting: {
		animation: `$exitEffect 800ms linear`,
		opacity: 0,
		// height: '100%',
	},
	'@keyframes appearEffect': {
		'0%': {
			opacity: 0.7,
			borderRadius: '50%',
		},
		'100%': {
			opacity: 0,
			borderRadius: '0%',
		},
	},
	'@keyframes exitEffect': {
		'0%': {
			opacity: 0.7,
			borderRadius: '0%',
			height: '100vmax',
			width: '100vmax',
		},
		'100%': {
			opacity: 0.7,
			borderRadius: '100%',
			height: '0%',
			width: '0%',
		},
	},
}));

/**
 * Gives the child a background of certain dimensions that rounds itself into a circle when its given parameter "on" is false.
 * @param {*} param0
 * @returns
 */
const Background = ({ children, on, dimensions }) => {
	useEffect(() => {
		// effect;
		return () => {
			console.log('Background terminated');
		};
	}, []);

	const classes = useStyles();

	return (
		<Box
			display='flex'
			justifyContent='center'
			alignItems='center'
			className={classes.box}>
			<div
				className={clsx(
					classes.background,
					classes.hideOverflow,
					{
						[classes.backgroundExiting]: !on,
					},
					{ [classes.backgroundAfterExit]: !on }
				)}>
				{children}
			</div>
		</Box>
	);
};

export default Background;
