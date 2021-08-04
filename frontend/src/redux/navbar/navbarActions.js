/** @format */

import { navbar_off, navbar_on } from './constants';

export const navbarOn = () => {
	return {
		type: navbar_on,
	};
};

export const navbarOff = () => {
	return {
		type: navbar_off,
	};
};
