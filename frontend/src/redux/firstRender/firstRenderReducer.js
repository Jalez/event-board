/** @format */

import { render_initialized } from './constants';

const initialState = true;

export default function firstRenderReducer(state = initialState, action) {
	switch (action.type) {
		case render_initialized:
			return false;
		default:
			return state;
	}
}
