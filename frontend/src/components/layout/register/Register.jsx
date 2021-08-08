/** @format */
import React from 'react';
import RegisterForm from './RegisterForm';
import ReduxSlide from '../../utils/ReduxSlide';
import { Box, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { navbarOff } from '../../../redux/navbar/navbarActions';
import { backgroundOn } from '../../../redux/background/backgroundActions';
import { slideIn } from '../../../redux/slide/sliderActions';

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
	const dispatch = useDispatch();

	// dispatch(navbarOff());
	dispatch(backgroundOn());
	// dispatch(slideIn());

	return (
		<div className={classes.root}>
			<ReduxSlide>
				<Box
					display='flex'
					className={classes.box}
					justifyContent='center'
					alignItems='center'>
					<RegisterForm />
				</Box>
			</ReduxSlide>
		</div>
	);
};

export default Register;
