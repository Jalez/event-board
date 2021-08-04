/** @format */
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';

export default function configureAppStore(preloadedState) {
	const middlewares = [];
	const enhancers = [];

	const store = configureStore({
		reducer: rootReducer,
		middleware: middlewares,
		devTools: process.env.NODE_ENV !== 'production',
		preloadedState,
		enhancers: enhancers,
	});

	// https://redux.js.org/usage/configuring-your-store/#hot-reloading
	if (process.env.NODE_ENV !== 'production' && module.hot) {
		module.hot.accept('./rootReducer', () => store.replaceReducer(rootReducer));
	}

	return store;
}
