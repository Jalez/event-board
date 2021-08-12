/** @format */

import { NEW_DESTINATION } from './constants';

export const changeLocation = (destination) => {
	return {
		payload: destination,
		type: NEW_DESTINATION,
	};
};
