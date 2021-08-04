/** @format */

import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import { Provider } from 'react-redux';
import configureAppStore from './redux/configureAppStore';

import './style.css';

const store = configureAppStore();

const renderApp = () =>
	render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')
	);

if (process.env.NODE_ENV !== 'production' && module.hot) {
	module.hot.accept('./components/App', renderApp);
}

renderApp();
