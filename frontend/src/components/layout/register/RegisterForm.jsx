/** @format */

// React imports
import React from 'react';

import { withRouter } from 'react-router-dom';

// Material-ui imports
import Button from '@material-ui/core/Button';
import Header from '../../utils/Header';
import UserInput from '../../utils/UserInput';
import FlexBox from '../../utils/FlexBox';
import { useDispatch } from 'react-redux';
import { newSlideDestination } from '../../../redux/historySlider/sliderActions';

const RegisterForm = ({ history }) => {
	const dispatch = useDispatch();

	const toRegister = () => {
		dispatch(newSlideDestination('/'));
	};

	const row = {
		direction: 'row',
	};

	const registerButton = {
		size: 'large',
		color: 'primary',
		variant: 'outlined',
		onClick: toRegister,
	};

	return (
		<FlexBox direction='column'>
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
			<Button {...registerButton}>Register account</Button>
		</FlexBox>
	);
};

export default withRouter(RegisterForm);
