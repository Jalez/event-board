/** @format */

import React from 'react';
import { makeStyles, Button, Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { backgroundOff } from '../../../redux/background/backgroundActions';
import { useDispatch } from 'react-redux';
import { navbarOff, navbarOn } from '../../../redux/navbar/navbarActions';

const useStyles = makeStyles((theme) => ({
	form: {},
	height: {
		height: '100%',
	},
}));

const LoginForm = ({ click }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	dispatch(navbarOff());
	const loginUser = () => {
		click();
		dispatch(backgroundOff());
		dispatch(navbarOn());
	};

	return (
		<form className={classes.form}>
			<Box
				className={classes.height}
				display='flex'
				flexDirection='column'
				alignItems='center'
				justifyContent='space-evenly'>
				<Box>
					<Typography variant='h3' color='primary' component='h3'>
						Log in
					</Typography>
				</Box>
				<TextField variant='filled' label='Username'></TextField>
				<TextField variant='filled' label='Password'></TextField>

				<Button
					size='large'
					color='primary'
					variant='outlined'
					onClick={loginUser}>
					Login
				</Button>
				<Box display='flex' alignItems='center' flexDirection='column'></Box>
			</Box>
		</form>
	);
};

export default LoginForm;
