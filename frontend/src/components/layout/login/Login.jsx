/** @format */
import React from 'react';
import LoginForm from './LoginForm';
import HistorySlider from '../../utils/HistorySlider';
import { Box, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { navbarOff } from '../../../redux/navbar/navbarActions';
import { backgroundOn } from '../../../redux/background/backgroundActions';

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

const Login = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	dispatch(navbarOff());
	dispatch(backgroundOn());
	// dispatch(slideIn());

	const direction = {
		'/': 'up',
		'/register': 'right',
	};

	return (
		<div className={classes.root}>
			<HistorySlider directions={direction}>
				<Box
					display='flex'
					className={classes.box}
					justifyContent='center'
					alignItems='center'>
					<LoginForm />
				</Box>
			</HistorySlider>
		</div>
	);
};

export default Login;
