/** @format */

// React imports
import React, { useEffect } from 'react';

// Redux tools
import { useDispatch } from 'react-redux';
import { mount, unmount } from '../../../redux/historySlider/sliderActions';

// Utils used:
import CardContainer from '../../utils/CardContainer';
import Divider from '../../utils/Divider';

// Register Option components
import RegisterForm from './RegisterForm';
import RegisterFooter from './RegisterFooter';

const RegisterOptions = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(mount());

		return () => {
			// When component dismounts, we need to inform the HistorySlider
			dispatch(unmount());
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<CardContainer>
			<RegisterForm />
			<Divider>OR</Divider>
			<RegisterFooter />
		</CardContainer>
	);
};

export default RegisterOptions;
