/** @format */

import {
	direction_change,
	mount_child,
	slide_in,
	slide_out,
	unmount_child,
} from './constants';

export const slideDirection = (payload) => {
	return {
		payload,
		type: direction_change,
	};
};


export const slideIn = () => {
	return {
		type: slide_in
	}
}

export const slideOut = () => {
	return {
		type: slide_out
	}
}

export const unmount = () => {
	return {
		type: unmount_child,
	};
};

export const mount = () => {
	return {
		type: mount_child,
	};
};
