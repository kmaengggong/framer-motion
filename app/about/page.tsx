import LongText from "@/components/etc/longText";
import Image from "next/image";

export default function AboutPage() {
	return (
		<div>
			<div className="h-[100vh] bg-gradient-to-b from-[#77bbdd] to-white px-4 py-20">
				<Image
					src="/hap_to_sad_pepe.gif"
					alt="hap-to-sad-pepe"
					width={200}
					height={200}
				/>
				안녕하세요.
				<LongText count={50} />
			</div>
		</div>
	);
}
