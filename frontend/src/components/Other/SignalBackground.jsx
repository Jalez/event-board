/** @format */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Background from './Background';
import Signals from './Signals';

const SignalBackground = ({ children }) => {
	const { background: on } = useSelector((state) => state);
	const [dimensions, setDimensions] = useState({
		height: window.innerHeight,
		width: window.innerWidth,
	});

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
