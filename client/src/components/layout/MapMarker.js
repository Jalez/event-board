/** @format */

import React from 'react';
import AdbIcon from '@material-ui/icons/Adb';
import { Badge, IconButton } from '@material-ui/core';

const MapMarker = () => {
	return (
		<IconButton aria-label='show 4 new mails' color='inherit'>
			<Badge badgeContent={4} color='secondary'>
				<AdbIcon />
			</Badge>
		</IconButton>
	);
};

export default MapMarker;
