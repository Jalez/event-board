/** @format */

import Box from '@material-ui/core/Box';
import React from 'react';

const FlexBox = ({ direction, children }) => {
	const flexBox = {
		display: 'flex',
		flexDirection: direction,
		alignItems: 'center',
		justifyContent: 'center',
	};

	return <Box {...flexBox}>{children}</Box>;
};

export default FlexBox;
