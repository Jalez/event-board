/** @format */

import React from 'react';
import Map from './Map';
import TabBar from './TabBar';
import BottomNavBar from '../bottomNavBar/BottomNavBar';

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
