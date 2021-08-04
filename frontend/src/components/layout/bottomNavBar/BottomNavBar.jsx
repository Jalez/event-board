/** @format */

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchBar from './SearchBar';
import MenuOptions from './MenuOptions';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import Bulldozer from '../../utils/Bulldozer';
// import Slide from '@material-ui/core/Slide';

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

const BottomNavBar = () => {
	const { navbar } = useSelector((state) => state);
	const [enterOrExit, setEnterOrExit] = useState(null);
	const [firstRender, setFirstRender] = useState(true);

	useEffect(() => {
		if (!firstRender) setEnterOrExit(navbar ? 'enter' : 'exit');
		return () => {
			setFirstRender(false);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navbar]);

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
		<div className={classes.overflow}>
			<Bulldozer itemToPush={navbar}>
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
			{/* </div> */}
		</div>
	);
};

export default BottomNavBar;
