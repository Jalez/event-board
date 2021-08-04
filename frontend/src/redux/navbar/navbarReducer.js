/** @format */

import { navbar_off, navbar_on } from './constants';

const initialState = true;

export default function navbarReducer(state = initialState, action) {
	switch (action.type) {
		case navbar_on:
			return true;
		case navbar_off:
			return false;
		default:
			return state;
	}
}
