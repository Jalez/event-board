/** @format */

import backgroundReducer from './background/backgroundReducer';
import firstRenderReducer from './firstRender/firstRenderReducer';
import navbarReducer from './navbar/navbarReducer';
import slideReducer from './slide/sliderReducer';

const rootReducer = {
	background: backgroundReducer,
	navbar: navbarReducer,
	slide: slideReducer,
	firstRender: firstRenderReducer,
};

export default rootReducer;
