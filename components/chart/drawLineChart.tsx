import { fetchStats } from "@/app/lib/data";
import ChartClient from "./chartClient";
import LineChart from "./lineChart";

const DrawLineChart = async () => {
	const stats = await fetchStats();
	console.log(stats);

	return <LineChart stats={stats} />;
};

export default DrawLineChart;
