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
import CardContainer from '../../utils/CardContainer';
import FlexBox from '../../utils/FlexBox';
import Header from '../../utils/Header';
import UserInput from '../../utils/UserInput';

const LoginForm = ({ history }) => {
	const [destination, setDestination] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		if (destination) {
			if (destination === '/') {
				dispatch(slideDirection('up'));
			} else if (destination === '/register') {
				dispatch(slideDirection('right'));
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
		setDestination('/');
	};

	const toRegister = () => {
		setDestination('/register');
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

export default withRouter(LoginForm);
