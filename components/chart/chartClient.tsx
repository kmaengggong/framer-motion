"use client";

import { Stats } from "@/app/lib/definitions";
import LineChart from "./lineChart";
import { useEffect } from "react";

const ChartClient = ({ stats }: { stats: Stats[] }) => {
	useEffect(() => console.log("gpt개씨발아"));
	return <LineChart stats={stats} />;
};

export default ChartClient;
