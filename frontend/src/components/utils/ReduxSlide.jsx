/** @format */

import Slide from '@material-ui/core/Slide';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	slideDirection,
	slideIn,
	mount,
} from '../../redux/slide/sliderActions';

const ReduxSlide = ({ children }) => {
	const slide = useSelector((state) => state.slide);
	// const firstRender = useSelector((state) => state.firstRender);
	const dispatch = useDispatch();

	useEffect(() => {
		console.log(slide.direction);
		if (!slide.mounted) {
			console.log('unmounted');
			if (slide.direction === 'right') dispatch(slideDirection('left'));
			else if (slide.direction === 'left') dispatch(slideDirection('right'));
			else if (slide.direction === 'down') dispatch(slideDirection('up'));
			else if (slide.direction === 'up') dispatch(slideDirection('down'));
			dispatch(mount());
		} else {
			dispatch(slideIn());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [slide.mounted]);

	return (
		<Slide
			direction={slide.direction}
			in={slide.in}
			timeout={800}
			mountOnEnter
			unmountOnExit>
			{children}
		</Slide>
	);
};

export default ReduxSlide;
