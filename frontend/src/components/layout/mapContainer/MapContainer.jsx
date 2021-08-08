/** @format */

import React from 'react';
import BottomNavBar from '../bottomNavBar/BottomNavBar';
import Map from './Map';
import TabBar from './TabBar';

const MapContainer = () => {
	return (
		<>
			<TabBar />
			<Map />
			<BottomNavBar />
		</>
	);
};

export default MapContainer;
