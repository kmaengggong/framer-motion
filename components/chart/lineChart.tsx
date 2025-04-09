"use client";

import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { Stats } from "@/app/lib/definitions";

const LineChart = ({ stats }: { stats: Stats[] }) => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		if (!canvasRef.current || stats.length === 0) return;

		const ctx = canvasRef.current;
		const labels = stats.map((s) => s.chara_pair);
		const values = stats.map((s) => Number(s.stats_count));

		const data = {
			labels: labels,
			datasets: [
				{
					label: "Line Chart",
					data: values,
					fill: false,
					backgroundColor: stats.map((s, i) => {
						const gradient = ctx.getContext("2d")!.createLinearGradient(0, 0, 400, 0);
						gradient.addColorStop(0, s.chara_a_color);
						gradient.addColorStop(1, s.chara_b_color);
						return gradient;
					}),
					borderColor: "rgba(0, 0, 0, 0)",
					borderWidth: 0,
				},
			],
		};

		const chart = new Chart(ctx, {
			type: "bar",
			data: data,
			options: {
				indexAxis: "y",
			},
		});

		return function cleanup() {
			chart.destroy();
		};
	}, [stats]);

	return <canvas ref={canvasRef} />;
};

export default LineChart;
