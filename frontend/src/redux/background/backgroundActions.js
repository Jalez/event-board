/** @format */

import { background_off, background_on } from './constants';

export const backgroundOn = () => {
	return {
		type: background_on,
	};
};

export const backgroundOff = () => {
	return {
		type: background_off,
	};
};
