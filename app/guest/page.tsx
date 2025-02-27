import LineChart from "@/components/chart/lineChart";
import LongText from "@/components/etc/longText";

export default function GuestPage() {
	return (
		<div>
			<div className="h-[100vh] bg-gradient-to-b from-[#77bbdd] to-white px-4 py-20">
				<LineChart />
				<LongText count={50} />
			</div>
		</div>
	);
}
