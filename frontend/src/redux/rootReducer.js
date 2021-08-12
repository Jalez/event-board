/** @format */

import backgroundReducer from './background/backgroundReducer';
import { destinationReducer } from './destination/destinationReducer';
import navbarReducer from './navbar/navbarReducer';
import historySliderReducer from './historySlider/sliderReducer';

const rootReducer = {
	background: backgroundReducer,
	navbar: navbarReducer,
	historySlider: historySliderReducer,
	destination: destinationReducer,
};

export default rootReducer;
