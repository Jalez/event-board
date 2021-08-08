/** @format */

import { FormControl, makeStyles, TextField } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	textField: {
		margin: theme.spacing(1),
	},
}));

const UserInput = ({ children, type }) => {
	const { textField } = useStyles();
	return (
		<FormControl fullWidth>
			<TextField
				className={textField}
				variant='filled'
				label={children}
				margin='normal'
				type={type}
			/>
		</FormControl>
	);
};

export default UserInput;
