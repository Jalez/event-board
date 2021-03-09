/** @format */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchBar from './SearchBar';
import MenuOptions from './MenuOptions';

const useStyles = makeStyles(() => ({
	appBar: {
		top: 'auto',
		bottom: 0,
		position: 'sticky',
		color: 'primary',
		width: '100%',
	},
	grow: {
		flexGrow: 1,
	},
	fabButton: {
		position: 'absolute',
		zIndex: 1,
		top: -30,
		left: 0,
		right: 0,
		margin: '0 auto',
	},
}));

const BottomNavBar = () => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<AppBar className={classes.appBar}>
				<Toolbar>
					<Fab color='secondary' aria-label='add' className={classes.fabButton}>
						<AddIcon />
					</Fab>
					<MenuOptions />
					<div className={classes.grow} />
					<SearchBar />
					<IconButton edge='start' color='inherit' aria-label='open drawer'>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
};

export default BottomNavBar;
