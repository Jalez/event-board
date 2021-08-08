/** @format */

import {
	direction_change,
	mount_child,
	slide_in,
	slide_out,
	unmount_child,
} from './constants';

const initialState = { in: false, direction: 'down' };

export default function sliderReducer(state = initialState, action) {
	switch (action.type) {
		case slide_in:
			return { ...state, in: true };
		case slide_out:
			return {...state, in: false};
		case direction_change:
			return { ...state, direction: action.payload };
		case mount_child:
			return { ...state, mounted: true };
		case unmount_child:
			return { ...state, mounted: false };
		default:
			return state;
	}
}
