/** @format */
import React from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';
import MapContainer from './layout/mapContainer/MapContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './layout/login/Login';
import Register from './layout/register/Register';
import SignalBackground from './Other/SignalBackground';

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
				<SignalBackground />
				<Router>
					<Switch>
						{/* <Route path='/' exact></Route> */}
						<Route path='/login'>
							<Login />
						</Route>
						<Route path='/register'>
							<Register />
						</Route>
					</Switch>
				</Router>
			</ThemeProvider>
		</>
	);
};

export default App;
