/** @format */

import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
	dot: (props) => ({
		backgroundColor: theme.palette.secondary.dark,
		position: 'absolute',
		width: `${props.width}px`,
		height: `${props.height}px`,
		borderRadius: '50%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		opacity: 0,
		top: `${props.top}%`,
		left: `${props.left}%`,
	}),
	firstWave: (props) => ({
		position: 'absolute',
		border: `5px solid ${theme.palette.secondary.dark}`,
		width: `${props.width - 3}px`,
		height: `${props.height - 3}px`,
		display: 'flex',
		borderRadius: '50%',
	}),
	ripple: {
		animation: `$rippleEffect 2s linear infinite`,
	},
	fade: {
		animation: `$fadeEffect 2s`,
	},
	invisible: {
		opacity: 0,
	},
	'@keyframes fadeEffect': {
		'0%': {
			opacity: 1,
		},
		'100%': {
			opacity: 0,
		},
	},
	'@keyframes rippleEffect': {
		'100%': {
			transform: 'scale(2)',
		},
	},
}));

const Signal = ({ top, left, width, height }) => {
	const [isVisible, setIsVisible] = useState(true);
	useEffect(() => {
		const timeOut = setTimeout(() => {
			setIsVisible(false);
		}, 2000);
		return () => {
			clearTimeout(timeOut);
		};
	});
	const classes = useStyles({ top, left, width, height });
	return (
		<div
			className={clsx({ [classes.dot]: isVisible }, classes.fade, {
				[classes.invisible]: !isVisible,
			})}>
			<div className={clsx(classes.firstWave, classes.ripple)}></div>
		</div>
	);
};

export default Signal;
