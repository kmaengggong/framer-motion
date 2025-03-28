import LineChart from "@/components/chart/lineChart";
import LongText from "@/components/etc/longText";

export default function GuestPage() {
	return (
		<div className="relative min-h-screen px-4 py-20 bg-white">
			<div className="absolute inset-0 h-[100vh] bg-gradient-to-b from-[#77bbdd] to-white pointer-events-none"></div>
			
			<div className="relative">
				<LineChart />
				<LongText count={50} />
			</div>
		</div>
	);
}
