/** @format */

import { Fab, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(() => ({
	fabButton: {
		position: 'fixed',
		bottom: 30,
		// zIndex: ,
		left: 0,
		right: 0,
		margin: '0 auto',
		transition: 'transform 1s linear',
	},
	fabButtonEnter: {
		animation: `$flyIn 1s linear`,
	},
	fabButtonExit: {
		animation: `$flyOut 1s linear`,
	},
	fabButtonDead: {
		bottom: -60,
	},
	'@keyframes flyIn': {
		'0%': {
			bottom: -60,
		},
		'100%': {
			bottom: 30,
		},
	},
	'@keyframes flyOut': {
		'0%': {
			bottom: 30,
		},
		'100%': {
			bottom: -60,
		},
	},
}));

export const FabButton = ({ enterOrExit }) => {
	const { navbar } = useSelector((state) => state);
	const classes = useStyles();

	return (
		<>
			<Fab
				color='secondary'
				trans
				aria-label='add'
				className={clsx(classes.fabButton, {
					[classes.fabButtonEnter]: enterOrExit === 'enter',
					[classes.fabButtonExit]: enterOrExit === 'exit',
					[classes.fabButtonDead]: !navbar,
				})}>
				<AddIcon />
			</Fab>
		</>
	);
};
