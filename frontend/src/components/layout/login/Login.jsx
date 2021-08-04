/** @format */

import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import React, { useEffect, useState } from 'react';
import Switcher from '../../utils/ContentSwitcher';
import SignInContent from './SignInContent';
import { withRouter } from 'react-router-dom';

import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { backgroundOn } from '../../../redux/background/backgroundActions';

const useStyles = makeStyles((theme) => ({
	vanish: {
		opacity: 0,
	},
	height: {
		height: '100%',
		width: '100%',
		position: 'absolute',
	},
	absolute: {
		position: 'absolute',
	},
	content: {
		backgroundColor: theme.palette.secondary.light,
		width: 'auto',
		// height: '100%',
		minHeight: 100,
		borderRadius: 10,
		padding: 20,
		zIndex: 110,
		position: 'absolute',
	},
	hideOverflow: {
		overflow: 'hidden',
	},
}));

// const useStyles = makeStyles({});
const Login = (props) => {
	const classes = useStyles();
	const [checked, setChecked] = useState(true);
	const [done, setDone] = useState(false);
	const dispatch = useDispatch();
	//Slide
	const [content, setContent] = useState(0);
	const [direction, setDirection] = useState('down');
	const [inSlide, setInSlide] = useState(true);
	const [mounted, setMounted] = useState(true);

	dispatch(backgroundOn());
	useEffect(() => {
		if (direction === 'right' && !mounted) {
			console.log('Gets here');
			setDirection('left');
			setContent(content + 1);
			setInSlide(true);
			setMounted(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [direction, mounted]);

	const handleUnmount = () => {
		console.log('Change mounted state');
		setMounted(false);
	};

	const checker = () => {
		console.log('checker');
		setChecked(!checked);
		setDone(true);

		props.history.push('/');
	};

	const changeContent = () => {
		console.log('content changed');
		setDirection('right');
		setInSlide(false);
	};

	return (
		<div className={clsx({ [classes.vanish]: done }, classes.height)}>
			<Slide
				direction={direction}
				in={inSlide}
				timeout={800}
				mountOnEnter
				unmountOnExit
				style={{ zIndex: '100' }}>
				<Box
					display='flex'
					className={classes.height}
					// flexDirection=''column''
					justifyContent='center'
					alignItems='center'>
					<Paper elevation={4} className={classes.content}>
						<Switcher current={content}>
							<SignInContent
								checker={checker}
								changeContent={changeContent}
								unmount={handleUnmount}
							/>
							<div>Child1</div>
						</Switcher>
					</Paper>
				</Box>
			</Slide>
		</div>
	);
};

export default withRouter(Login);
