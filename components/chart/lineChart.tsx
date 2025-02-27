"use client";

import { Chart } from "chart.js/auto";
import { useEffect, useRef } from "react";

const LineChart = () => {
	const canvasEl = useRef(null);

	useEffect(() => {
		if (canvasEl.current !== null) {
			const ctx = canvasEl.current;

			const labels = [1, 2, 3, 4, 5, 6, 7];

			const data = {
				labels: labels,
				datasets: [
					{
						label: "Line Chart",
						data: [65, 59, 80, 81, 56, 55, 40],
						fill: false,
						backgroundColor: [
							"rgb(227, 106, 131)",
							"rgb(249, 209, 96)",
							"rgb(123, 204, 148)",
							"rgb(130, 211, 207)",
							"rgb(111, 162, 247)",
							"rgb(128, 89, 230)",
							"rgb(80, 80, 80)",
						],
						borderColor: [
							"rgb(227, 106, 131)",
							"rgb(249, 209, 96)",
							"rgb(123, 204, 148)",
							"rgb(130, 211, 207)",
							"rgb(111, 162, 247)",
							"rgb(128, 89, 230)",
							"rgb(80, 80, 80)",
						],
						tension: 0.1,
					},
				],
			};

			const myTest = new Chart(ctx, {
				type: "bar",
				data: data,
				options: {
					indexAxis: "y",
				},
			});

			return function cleanup() {
				myTest.destroy();
			};
		}
	});

	return (
		<>
			<canvas ref={canvasEl} />
		</>
	);
};

export default LineChart;
