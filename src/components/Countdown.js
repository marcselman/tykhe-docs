import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";

export default function Countdown(props) {
	const countDownDate = DateTime.now().setZone('UTC-5').endOf('day');

	const [countDown, setCountDown] = useState(
		countDownDate.diff(DateTime.local(), ['hours', 'minutes', 'seconds', 'millisecond'])
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setCountDown(countDownDate.diff(DateTime.local(), ['hours', 'minutes', 'seconds', 'millisecond']));
		}, 1000);

		return () => clearInterval(interval);
	}, [countDownDate]);

	return (
		<div style={{
			display: 'flex',
			alignItems: 'center',
			marginBottom: 'var(--ifm-leading)'
		}}>
			<div style={timePartStyle}>
				{countDown.values.hours}
				<span style={timeLabelStyle}>hours</span>
			</div>
			<div style={timePartStyle}>
				{countDown.values.minutes}
				<span style={timeLabelStyle}>minutes</span>
			</div>
			<div style={timePartStyle}>
				{countDown.values.seconds}
				<span style={timeLabelStyle}>seconds</span>
			</div>
		</div>
	)
};

const timePartStyle = {
	fontSize: '46px',
	padding: '16px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center'
};
const timeLabelStyle = {
	fontSize: '16px'
}