/** @format */

import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	floatingPaper: {
		display: 'flex',
		justifyContent: 'center',
	},
	floatingTabs: {
		borderRadius: 10,
		background: 'white',
		position: 'fixed',
		top: 10,
		zIndex: 10,
	},
}));

const TabBar = () => {
	const classes = useStyles();
	const [value, setValue] = useState(2);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Paper className={classes.floatingPaper}>
			<Tabs
				className={classes.floatingTabs}
				value={value}
				indicatorColor='primary'
				textColor='primary'
				onChange={handleChange}
				aria-label='Tab bar'>
				<Tab label='Työt' />
				<Tab label='Ystävät' />
				<Tab label='Tarjoukset' />
				<Tab label='Kaikki' />
			</Tabs>
		</Paper>
	);
};

export default TabBar;
