"use client";

import FloatingText from "@/components/text/floatingText";
import CharaCards from "@/components/chara/charaCards";
// import { motion } from "motion/react";

export default function CharaPage() {
	return (
		<div className="relative min-h-screen px-4 py-20 bg-white">
			<div className="absolute inset-0 h-[100vh] bg-gradient-to-b from-mygo-color to-white pointer-events-none"></div>

			<div className="relative">
				<CharaCards />

				{[...Array(100)].map((_, index) => (
					<FloatingText key={index}>아논소요</FloatingText>
				))}
			</div>
		</div>
	);
}
