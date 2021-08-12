/** @format */

// React imports
import React from 'react';

// Redux imports
import { useSelector } from 'react-redux';

// Material-ui imports
import { Box, makeStyles } from '@material-ui/core';

// Own util imports
import HistorySlider from '../../utils/HistorySlider';

// RegisterOptions
import RegisterOptions from './RegisterOptions';

const useStyles = makeStyles((theme) => ({
	root: {
		overflow: 'hidden',
		position: 'absolute',
		height: '100vh',
		width: '100vw',
		zIndex: 100,
	},
	box: {
		height: '100%',
		width: '100%',
	},
}));

const Register = () => {
	const classes = useStyles();
	const location = useSelector((state) => state.location);

	const directions = {
		'/': 'up',
		'/login': 'left',
	};

	const box = {
		display: 'flex',
		className: classes.box,
		justifyContent: 'center',
		alignItems: 'center',
	};

	return (
		<div className={classes.root}>
			<HistorySlider destination={location} directions={directions}>
				<Box {...box}>
					<RegisterOptions />
				</Box>
			</HistorySlider>
		</div>
	);
};

export default Register;
