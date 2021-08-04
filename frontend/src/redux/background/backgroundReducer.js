/** @format */

import { background_off, background_on } from './constants';

const initialState = false;

export default function backgroundReducer(state = initialState, action) {
	switch (action.type) {
		case background_on:
			return true;
		case background_off:
			return false;
		default:
			return state;
	}
}
