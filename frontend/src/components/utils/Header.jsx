/** @format */

import Typography from '@material-ui/core/Typography';
import React from 'react';

const Header = ({ children }) => {
	const header = {
		variant: 'h3',
		color: 'primary',
		component: 'h3',
	};

	return <Typography {...header}>{children}</Typography>;
};

export default Header;
