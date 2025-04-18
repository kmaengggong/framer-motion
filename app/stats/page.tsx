// import DrawLineChart from "@/components/chart/drawLineChart";
import CharaSelects from "@/components/chara/charaSelects";
import TitleText from "@/components/text/titleText";
import LineChart from "@/components/chart/lineChart";

export default function StatsPage() {
	return (
		<div className="relative min-h-screen px-4 py-20 bg-white">
			<div className="absolute inset-0 h-[100vh] bg-gradient-to-b from-mygo-color to-white pointer-events-none"></div>
			<div className="relative">
				<TitleText className="text-center">Stats</TitleText>
				{/* <DrawLineChart /> */}
				<LineChart />
				<div className="my-10"></div>
				<TitleText className="text-center">Votes</TitleText>
				<CharaSelects />
			</div>
		</div>
	);
}
