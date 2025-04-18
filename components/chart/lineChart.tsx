"use client";

import { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import { StatsResult } from "@/app/lib/definitions";

const LineChart = () => {
	const [stats, setStats] = useState<StatsResult[] | null>(null);
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch("/api/stats", { method: "GET" });
				if (res.ok) {
					const json = await res.json();
					setStats(json);
				} else {
					alert("Failed to fetch stats");
				}
			} catch (error) {
				console.error("Fetch error: ", error);
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		if (!stats || !canvasRef.current || stats.length === 0) return;

		const ctx = canvasRef.current;
		const labels = stats.map((s) => s.chara_pair);
		const values = stats.map((s) => Number(s.stats_count));

		const data = {
			labels: labels,
			datasets: [
				{
					label: "Votes",
					data: values,
					backgroundColor: stats.map((s, i) => {
						const gradient = ctx
							.getContext("2d")!
							.createLinearGradient(0, 0, 400, 0);
						gradient.addColorStop(0, s.chara_a_color);
						gradient.addColorStop(1, s.chara_b_color);
						return gradient;
					}),
					borderColor: "rgba(0, 0, 0, 0)",
					borderWidth: 0,
					// barThickness: 20,
					// categoryPercentage: 1.0,
					barPercentage: 0.7,
				},
			],
		};

		const chart = new Chart(ctx, {
			type: "bar",
			data: data,
			options: {
				indexAxis: "y",
				scales: {
					x: {
						ticks: {
							font: {
								size: 14,
							},
						},
					},
					y: {
						ticks: {
							font: {
								size: 14,
							},
						},
					},
				},
			},
		});

		return function cleanup() {
			chart.destroy();
		};
	}, [stats]);

	return (
		<>
			{stats && (
				<canvas
					ref={canvasRef}
					height={stats.length * 25}
					className="bg-[rgba(255,255,255,0.5)]"
				/>
			)}
		</>
	);
};

export default LineChart;
