/** @format */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
	backgroundOff,
	backgroundOn,
} from '../../redux/background/backgroundActions';
import Background from './Background';
import Signals from './Signals';

const SignalBackground = ({ children }) => {
	const location = useLocation();
	const { background: on } = useSelector((state) => state);
	const [dimensions, setDimensions] = useState({
		height: window.innerHeight,
		width: window.innerWidth,
	});

	const dispatch = useDispatch();

	useEffect(() => {
		if (location.pathname === '/') dispatch(backgroundOff());
		else {
			dispatch(backgroundOn());
		}
		return () => {
			if (location) {
				if (location === '/') {
				}
			}
		};
	}, [location, dispatch]);

	// Update dimensions
	useEffect(() => {
		const handleResize = () => {
			setDimensions({ height: window.innerHeight, width: window.innerWidth });
		};

		window.addEventListener('resize', handleResize);
		return () => {
			// Remove listener whenever component re-renders.
			window.removeEventListener('resize', handleResize);
		};
	}, [dimensions]);

	return (
		<Background on={on} dimensions={dimensions}>
			<Signals active={on} dimensions={dimensions} />
			{children}
		</Background>
	);
};

export default SignalBackground;
