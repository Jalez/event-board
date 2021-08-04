/** @format */

import React, { useEffect } from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import LoginForm from './LoginForm';

const SignInContent = ({ checker, changeContent, unmount }) => {
	useEffect(() => {
		// mount(true);
		return () => {
			console.log('unmounted');
			unmount();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<LoginForm click={checker} />
			<Typography variant='body1' gutterBottom>
				First time?
			</Typography>
			<Button onClick={changeContent}>Register here</Button>
		</>
	);
};

export default SignInContent;
