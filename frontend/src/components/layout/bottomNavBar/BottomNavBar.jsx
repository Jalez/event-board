/** @format */

import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import clsx from 'clsx';

// Material-ui imports
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// Own component imports
import SearchBar from './SearchBar';
import MenuOptions from './MenuOptions';

// Own Util imports
import Bulldozer from '../../utils/Bulldozer';

const useStyles = makeStyles(() => ({
	overflow: {
		overflow: 'hidden',
	},
	appBar: {
		top: 'auto',
		color: 'primary',
		width: '100%',
		bottom: 0,
		height: '100%',
	},
	stickyPosition: {
		position: 'sticky',
	},
	appBarAlive: {
		position: 'static',
		width: '100%',
		height: '60px',
	},
	appBarEnter: {
		animation: `$slideIn 1s linear`,
	},
	appBarDead: {
		position: 'static',
		width: '100%',
		height: 0,
	},
	appBarExit: {
		animation: `$slideOut 1s linear`,
	},
	grow: {
		flexGrow: 1,
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

const BottomNavBar = (History) => {
	const location = useLocation();
	const [enterOrExit, setEnterOrExit] = useState(null);

	useEffect(() => {
		if (location?.pathname === '/') {
			if (enterOrExit !== 'enter') setEnterOrExit('enter');
		} else {
			if (enterOrExit !== 'exit') setEnterOrExit('exit');
		}
		return () => {};
	}, [location, enterOrExit]);

	const classes = useStyles();

	return (
		<div className={classes.overflow}>
			<Bulldozer itemToPush={enterOrExit === 'enter'}>
				<AppBar
					className={clsx(classes.appBar, {
						[classes.stickyPosition]: true,
						[classes.stickyPositionExit]: true,
					})}>
					<Toolbar>
						<MenuOptions />
						{/* <FabButton enterOrExit={enterOrExit} /> */}
						<div className={classes.grow} />
						<SearchBar />
						<IconButton edge='start' color='inherit' aria-label='open drawer'>
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
			</Bulldozer>
		</div>
	);
};

export default BottomNavBar;
