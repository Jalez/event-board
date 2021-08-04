/** @format */

import backgroundReducer from './background/backgroundReducer';
import navbarReducer from './navbar/navbarReducer';

const rootReducer = {
	background: backgroundReducer,
	navbar: navbarReducer,
};

export default rootReducer;
