/** @format */

import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { newSlideDestination } from '../../../redux/historySlider/sliderActions';
import FlexBox from '../../utils/FlexBox';

const RegisterFooter = () => {
	const dispatch = useDispatch();

	const toLogin = () => {
		dispatch(newSlideDestination('/login'));
	};

	return (
		<FlexBox direction='row'>
			<Typography variant='body1'>Already have an account?</Typography>
			<Button onClick={toLogin}>Sign in</Button>
		</FlexBox>
	);
};

export default RegisterFooter;
