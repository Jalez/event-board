/** @format */

import {
	direction_change,
	mount_child,
	NEW_SLIDE_DESTINATION,
	slide_in,
	slide_out,
	unmount_child,
} from './constants';

const initialState = {
	in: false,
	direction: 'down',
	mounted: true,
	destination: window.location.pathname,
};

export default function historySliderReducer(state = initialState, action) {
	switch (action.type) {
		case slide_in:
			return { ...state, in: true };
		case slide_out:
			return { ...state, in: false };
		case direction_change:
			return { ...state, direction: action.payload };
		case mount_child:
			return { ...state, mounted: true };
		case unmount_child:
			return { ...state, mounted: false };
		case NEW_SLIDE_DESTINATION:
			const origin = state.destination;
			return { ...state, destination: action.payload, origin };
		default:
			return state;
	}
}
