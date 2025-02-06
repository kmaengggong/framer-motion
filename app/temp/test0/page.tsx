"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./rain.css"; // 비 효과를 위한 CSS 파일 추가
import "./background.css"; // 배경 그라데이션 효과 추가
import Image from "next/image";
import Navbar from "../../../components/temp/navbar";

const makeItRain = () => {
	const rainFront = document.querySelector(".rain.front-row");
	const rainBack = document.querySelector(".rain.back-row");

	if (rainFront && rainBack) {
		rainFront.innerHTML = "";
		rainBack.innerHTML = "";

		let increment = 0;
		let drops = "";
		let backDrops = "";

		while (increment < 100) {
			const randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
			const randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
			increment += randoFiver;

			drops += `<div class="drop" style="left: ${increment}%; bottom: ${
				randoFiver + randoFiver - 1 + 100
			}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
			  <div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
			  <div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
			</div>`;
			backDrops += `<div class="drop" style="right: ${increment}%; bottom: ${
				randoFiver + randoFiver - 1 + 100
			}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
			  <div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
			  <div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
			</div>`;
		}

		rainFront.innerHTML = drops;
		rainBack.innerHTML = backDrops;
	}
};

export default function Test0() {
	// 🔊 소리 버튼 상태
	const [soundOn, setSoundOn] = useState(true);

	// 🔄 스크롤 감지
	const { scrollYProgress } = useScroll();

	// 🌧️ 비 애니메이션 (스크롤 내릴 때 등장)
	const rainOpacity = useTransform(scrollYProgress, [0.1, 1], [0, 1]);

	// 🔊 소리 버튼 투명도 (스크롤할수록 사라짐)
	const buttonOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

	const pepeOpacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);

	const navOpacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);

	useEffect(() => {
		makeItRain();
	}, []);

	return (
		<div className="background">
			{/* 🌧️ 비 애니메이션 */}
			<motion.div className="rain-container" style={{ opacity: rainOpacity }}>
				<div className="rain front-row"></div>
				<div className="rain back-row"></div>
			</motion.div>

			{/* 🔊 소리 버튼 (우측 하단) */}
			<motion.button
				onClick={() => setSoundOn(!soundOn)}
				style={{
					position: "fixed",
					bottom: "20px",
					right: "20px",
					width: "50px",
					height: "50px",
					borderRadius: "50%",
					border: "2px solid white",
					color: "white",
					background: "transparent",
					fontSize: "24px",
					cursor: "pointer",
					opacity: buttonOpacity, // 스크롤할수록 사라짐
				}}
			>
				{soundOn ? "🔊" : "🔇"}
			</motion.button>

			{/* <motion.div style={{opacity: navOpacity}} className="fixed top-[10px] left-1/2 -translate-x-1/2">
				<Navbar />
			</motion.div> */}

			<motion.div style={{ opacity: pepeOpacity }} className="fixed bottom-[10px] left-1/2 -translate-x-1/2">
				<Image src="/fat_pepe.jpeg" alt="fat-pepe" width={200} height={200} />
			</motion.div>
		</div>
	);
}
