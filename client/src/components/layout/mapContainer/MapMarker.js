/** @format */

import React from 'react';
import AdbIcon from '@material-ui/icons/Adb';
import { Badge, IconButton } from '@material-ui/core';
import Details from './Details';
import { useState } from 'react';

const TestText = {
	title: 'Title',
	intro: 'This is the intro of the title',
	madeBy: 'Jaakko Rajala',
	infoLink: '',
};

const MapMarker = (props) => {
	const [detailVisibility, setDetailVisibility] = useState(false);
	const MapClickHandler = () => {
		setDetailVisibility(!detailVisibility);
		console.log('Clicked');
		console.log(props);
	};

	return (
		<>
			<Details isVisible={detailVisibility} innerText={TestText} />
			<IconButton
				onClick={MapClickHandler}
				aria-label='show 4 new mails'
				color='inherit'>
				<Badge badgeContent={4} color='secondary'>
					<AdbIcon />
				</Badge>
			</IconButton>
		</>
	);
};

export default MapMarker;
