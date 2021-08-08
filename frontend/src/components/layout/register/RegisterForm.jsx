/** @format */

// React imports
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Material-ui imports
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Redux actions
import { backgroundOff } from '../../../redux/background/backgroundActions';
import { navbarOn } from '../../../redux/navbar/navbarActions';
import {
	slideDirection,
	slideOut,
	unmount,
} from '../../../redux/slide/sliderActions';
import Header from '../../utils/Header';
import UserInput from '../../utils/UserInput';
import FlexBox from '../../utils/FlexBox';
import CardContainer from '../../utils/CardContainer';

const RegisterForm = ({ history }) => {
	const [destination, setDestination] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		if (destination) {
			if (destination === '/') {
				dispatch(slideDirection('up'));
			} else if (destination === '/login') {
				dispatch(slideDirection('left'));
			}
			dispatch(slideOut());
		}
		return () => {
			if (destination) {
				if (destination === '/') {
					dispatch(backgroundOff());
					dispatch(navbarOn());
				}
				dispatch(unmount());
				history.push(destination);
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [destination]);

	const toLogin = () => {
		setDestination('/login');
	};

	const toRegister = () => {
		setDestination('/');
	};

	const content = {
		direction: 'column',
	};

	const row = {
		direction: 'row',
	};

	const loginButton = {
		size: 'large',
		color: 'primary',
		variant: 'outlined',
		onClick: toRegister,
	};

	return (
		<CardContainer>
			<FlexBox {...content}>
				<Header>Register form</Header>
				<FlexBox {...row}>
					<UserInput>First Name</UserInput>
					<UserInput>Last Name</UserInput>
				</FlexBox>
				<UserInput>Email</UserInput>
				<FlexBox {...row}>
					<UserInput type='password'>Password</UserInput>
					<UserInput type='password'>Confirm password</UserInput>
				</FlexBox>
				<Button {...loginButton}>Register account</Button>
				<FlexBox {...row}>
					<Typography variant='body1'>Already have an account?</Typography>
					<Button onClick={toLogin}>Sign in</Button>
				</FlexBox>
			</FlexBox>
		</CardContainer>
	);
};

export default withRouter(RegisterForm);
