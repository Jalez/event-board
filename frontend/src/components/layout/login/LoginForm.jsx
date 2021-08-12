/** @format */

// React imports
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Material-ui imports
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardContainer from '../../utils/CardContainer';
import FlexBox from '../../utils/FlexBox';
import Header from '../../utils/Header';
import UserInput from '../../utils/UserInput';

// Redux actions
import {
	mount,
	newSlideDestination,
	unmount,
} from '../../../redux/historySlider/sliderActions';

const LoginForm = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(mount());

		return () => {
			// When component dismounts, we need to inform the HistorySlider
			dispatch(unmount());
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const toLogin = () => {
		dispatch(newSlideDestination('/'));
	};

	const toRegister = () => {
		dispatch(newSlideDestination('/register'));
	};

	const loginButton = {
		size: 'large',
		color: 'primary',
		variant: 'outlined',
		onClick: toLogin,
	};

	return (
		<CardContainer>
			<FlexBox direction='column'>
				<Header>Login</Header>
				<UserInput>Email</UserInput>
				<UserInput type='password'>Password</UserInput>
				<Button {...loginButton}>Login</Button>
				<FlexBox direction='row'>
					<Typography variant='body1'>No account yet?</Typography>
					<Button onClick={toRegister}>SIGN UP</Button>
				</FlexBox>
			</FlexBox>
		</CardContainer>
	);
};

export default LoginForm;
