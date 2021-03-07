/** @format */
import React from 'react';
import BottomNavBar from './components/layout/BottomNavBar';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';
import MapContainer from './components/layout/MapContainer';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: teal[800],
		},
		secondary: {
			main: teal[400],
		},
	},
});

const App = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<MapContainer />
				<BottomNavBar />
			</ThemeProvider>
		</>
	);
};

/* <Grid item xs={12} lg={3} sm={4}>
						<Content />
					</Grid> */

export default App;
