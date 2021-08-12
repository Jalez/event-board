/** @format */

import { NEW_DESTINATION } from './constants';

const initialState = null;

export const destinationReducer = (state = initialState, action) => {
	switch (action.type) {
		case NEW_DESTINATION:
			return action.payload;
		default:
			return state;
	}
};
