/** @format */

import {
	Avatar,
	CssBaseline,
	ListItem,
	ListItemAvatar,
	ListItemText,
	ListSubheader,
	makeStyles,
	Paper,
	Typography,
} from '@material-ui/core';
import List from '@material-ui/core/List';
import React, { Fragment } from 'react';

const messages = [
	{
		id: 1,
		primary: 'Brunch this week?',
		secondary:
			"I'll be in the neighbourhood this week. Let's grab a bite to eat",
		person: '/static/images/avatar/5.jpg',
	},
	{
		id: 2,
		primary: 'Birthday Gift',
		secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
		person: '/static/images/avatar/1.jpg',
	},
	{
		id: 3,
		primary: 'Recipe to try',
		secondary:
			'I am try out this new BBQ recipe, I think this might be amazing',
		person: '/static/images/avatar/2.jpg',
	},
	{
		id: 4,
		primary: 'Yes!',
		secondary: 'I have the tickets to the ReactConf for this year.',
		person: '/static/images/avatar/3.jpg',
	},
	{
		id: 5,
		primary: "Doctor's Appointment",
		secondary:
			'My appointment for the doctor was rescheduled for next Saturday.',
		person: '/static/images/avatar/4.jpg',
	},
	{
		id: 6,
		primary: 'Discussion',
		secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
		person: '/static/images/avatar/5.jpg',
	},
	{
		id: 7,
		primary: 'Summer BBQ',
		secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
		person: '/static/images/avatar/1.jpg',
	},
];

const useStyles = makeStyles((theme) => ({
	text: {
		padding: theme.spacing(2, 2, 0),
	},
	paper: {
		paddingBottom: 50,
	},
	list: {
		marginBottom: theme.spacing(2),
	},
	subheader: {
		backgroundColor: theme.palette.background.paper,
	},
}));

const Content = () => {
	const classes = useStyles();
	return (
		<Fragment>
			<CssBaseline />
			<Paper
				square
				className={classes.paper}
				style={{ height: '100vh', overflow: 'auto' }}>
				<Typography className={classes.text} variant='h5' gutterBottom>
					Inbox
				</Typography>
				<List className={classes.list}>
					{messages.map(({ id, primary, secondary, person }) => (
						<React.Fragment key={id}>
							{id === 1 && (
								<ListSubheader className={classes.subheader}>
									Today
								</ListSubheader>
							)}
							{id === 3 && (
								<ListSubheader className={classes.subheader}>
									Yesterday
								</ListSubheader>
							)}
							<ListItem button>
								<ListItemAvatar>
									<Avatar alt='Profile Picture' src={person} />
								</ListItemAvatar>
								<ListItemText primary={primary} secondary={secondary} />
							</ListItem>
						</React.Fragment>
					))}
				</List>
			</Paper>
		</Fragment>
	);
};

export default Content;
