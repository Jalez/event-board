/** @format */

import React, { useEffect, useState } from 'react';
import Signal from './Signal';

const Signals = ({ active, dimensions }) => {
	const signalSize = 10;
	const [signals, setSignals] = useState([]);

	// console.log(signals);

	// Add signals to background
	useEffect(() => {
		let timeOut;
		if (active) {
			const addSignal = () => {
				const signalStrength = signalSize * 2;
				const key = Date.now();
				const top = Math.floor(
					100 *
						((Math.random() * (dimensions.height - signalStrength)) /
							dimensions.height)
				);

				const left = Math.floor(
					(100 * Math.random() * (dimensions.width - signalStrength)) /
						dimensions.width
				);
				signals.push({ key, top, left, height: signalSize, width: signalSize });
				setSignals([...signals]);
			};
			if (signals.length > 5) {
				// Remove first signal
				signals.shift();
				setSignals([...signals]);
			}
			timeOut = setTimeout(() => {
				// console.log('Timeout');
				addSignal();
			}, 1000);
		} else {
			if (signals.length > 0) setSignals([]);
		}

		return () => {
			clearTimeout(timeOut);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [signals, active]);

	return (
		<>
			{signals.map((details) => (
				<Signal {...details} />
			))}
		</>
	);
};

export default Signals;
