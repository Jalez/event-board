/** @format */

import Slide from '@material-ui/core/Slide';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const HistorySlider = ({ children, directions }) => {
	const history = useHistory();
	const { destination, origin, mounted } = useSelector(
		(state) => state.historySlider
	);
	const [slideIn, setSlideIn] = useState(true);
	const [slideDirection, setSlideDirection] = useState(
		directions[origin] || 'down'
	);

	useEffect(() => {
		const { pathname } = history.location;

		if (!mounted) {
			history.push(destination);
		} else if (destination && destination !== pathname) {
			setSlideDirection(directions[destination]);
			setSlideIn(false);
		}
	}, [destination, history, directions, mounted, origin]);

	return (
		<Slide
			direction={slideDirection}
			in={slideIn}
			timeout={800}
			mountOnEnter
			unmountOnExit>
			{children}
		</Slide>
	);
};

export default HistorySlider;
