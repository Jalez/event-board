/** @format */

import React, { useEffect, useState } from 'react';

/**
 * Switches between given children-components based on current-prop.
 * @param {*} param
 * @returns
 */
const ContentSwitcher = ({ children, current }) => {
	const [component, setComponent] = useState(null);

	useEffect(() => {
		setComponent(children[current]);
		return () => {
			// cleanup;
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [current]);
	return <>{component}</>;
};

export default ContentSwitcher;
