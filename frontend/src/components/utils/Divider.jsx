/** @format */

import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		alignItems: 'center',
	},
	border: {
		borderBottom: `0.15rem solid ${theme.palette.primary.light}`,
		width: '100%',
	},
	content: {
		padding: '0 0.30rem 0 0.30rem',
		fontFamily: theme.typography.fontFamily,
		color: theme.palette.primary.light,
	},
}));

const Divider = ({ children }) => {
	const { container, border, content } = useStyles();
	return (
		<div className={container}>
			<div className={border} />
			<span className={content}>
				<h2>{children}</h2>
			</span>
			<div className={border} />
		</div>
	);
};

export default Divider;
