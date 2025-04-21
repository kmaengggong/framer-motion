// "use client";

// import { useEffect, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import "./rain.css"; // 비 효과를 위한 CSS 파일 추가
// import "./background.css"; // 배경 그라데이션 효과 추가
// import Image from "next/image";
// import ScrollTracker from "@/components/temp/scrollTracker";

// const makeItRain = () => {
// 	const rainFront = document.querySelector(".rain.front-row");
// 	const rainBack = document.querySelector(".rain.back-row");

// 	if (rainFront && rainBack) {
// 		rainFront.innerHTML = "";
// 		rainBack.innerHTML = "";

// 		let increment = 0;
// 		let drops = "";
// 		let backDrops = "";

// 		while (increment < 100) {
// 			const randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
// 			const randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
// 			increment += randoFiver;

// 			drops += `<div class="drop" style="left: ${increment}%; bottom: ${
// 				randoFiver + randoFiver - 1 + 100
// 			}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
// 			  <div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
// 			  <div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
// 			</div>`;
// 			backDrops += `<div class="drop" style="right: ${increment}%; bottom: ${
// 				randoFiver + randoFiver - 1 + 100
// 			}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
// 			  <div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
// 			  <div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
// 			</div>`;
// 		}

// 		rainFront.innerHTML = drops;
// 		rainBack.innerHTML = backDrops;
// 	}
// };

// export default function Home() {
// 	// 🔊 소리 버튼 상태
// 	const [soundOn, setSoundOn] = useState(true);

// 	// 🔄 스크롤 감지
// 	const [scrollYProgress, setScrollY] = useState(0);

// 	useEffect(() => {
// 	  const updateScroll = () => setScrollY(window.scrollY);
// 	  window.addEventListener("scroll", updateScroll);

// 	  return () => {
// 		window.removeEventListener("scroll", updateScroll);
// 	  };
// 	}, []);
// 	// const { scrollYProgress } = useScroll();

// 	// 🌧️ 비 애니메이션 (스크롤 내릴 때 등장)
// 	const rainOpacity = useTransform(scrollYProgress, [0.1, 1], [0, 1]);

// 	// 🔊 소리 버튼 투명도 (스크롤할수록 사라짐)
// 	const buttonOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

// 	const pepeOpacity = useTransform(scrollYProgress, [1.5, 3], [0, 1]);

// 	useEffect(() => {
// 		makeItRain();
// 	}, []);

// 	return (
// 		<div className="background">
// 			<ScrollTracker />

// 			{/* 🌧️ 비 애니메이션 */}
// 			<motion.div className="rain-container" style={{ opacity: rainOpacity }}>
// 				<div className="rain front-row"></div>
// 				<div className="rain back-row"></div>
// 			</motion.div>

// 			{/* 🔊 소리 버튼 (우측 하단) */}
// 			<motion.button
// 				onClick={() => setSoundOn(!soundOn)}
// 				style={{
// 					position: "fixed",
// 					bottom: "20px",
// 					right: "20px",
// 					width: "50px",
// 					height: "50px",
// 					borderRadius: "50%",
// 					border: "2px solid white",
// 					color: "white",
// 					background: "transparent",
// 					fontSize: "24px",
// 					cursor: "pointer",
// 					opacity: buttonOpacity, // 스크롤할수록 사라짐
// 				}}
// 			>
// 				{soundOn ? "🔊" : "🔇"}
// 			</motion.button>

// 			<motion.div
// 				style={{ opacity: pepeOpacity }}
// 				className="fixed bottom-[10px] left-1/2 -translate-x-1/2"
// 			>
// 				<Image src="/fat_pepe.jpeg" alt="fat-pepe" width={200} height={200} />
// 			</motion.div>
// 		</div>
// 	);
// }

// page.tsx

"use client";

import ScrollTracker from "@/components/temp/scrollTracker";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import "./rain.css";

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

export default function HomePage() {
	// 🔊 소리 버튼 상태
	const [soundOn, setSoundOn] = useState(true);
	const { scrollYProgress } = useScroll();

	// 🌧️ 비 애니메이션 (스크롤 내릴 때 등장)
	const rainOpacity = useTransform(scrollYProgress, [0.05, 0.7], [0, 1]);

	// 🔊 소리 버튼 투명도 (스크롤할수록 사라짐)
	const buttonOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

	const pepeOpacity = useTransform(scrollYProgress, [1.5, 3], [0, 1]);

	useEffect(() => {
		makeItRain();
	}, []);

	const [buttonOpacityValue, setButtonOpacityValue] = useState<number>(1);
	// const [navOpacityValue, setNavOpacityValue] = useState<number>(1);

	useEffect(() => {
		const unsubscribe = buttonOpacity.onChange((v: number) => {
			setButtonOpacityValue(v);
		});

		return () => {
			unsubscribe();
		};
	}, [buttonOpacity]);

	useEffect(() => {
		const visitedBefore = localStorage.getItem("visited");

		if (visitedBefore) {
			// 방문한 적이 있으면 마지막 100vh로 이동
			window.scrollTo(0, window.innerHeight * 3);
		} else {
			// 첫 방문 시 방문 기록 저장
			localStorage.setItem("visited", "true");
		}
	}, []);

	return (
		<div className="h-[400vh] relative overflow-y-scroll scrollbar-hide">
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
					opacity: buttonOpacity,
					pointerEvents: buttonOpacityValue === 0 ? "none" : "auto",
				}}
			>
				{soundOn ? "🔊" : "🔇"}
			</motion.button>

			<ScrollTracker />

			{/* 배경 그라데이션을 위한 섹션 */}
			<div className="h-[100vh] bg-gradient-to-b from-black to-[#004466]"></div>
			<div className="h-[200vh] bg-gradient-to-b from-[#004466] to-mygo-color"></div>
			<div className="h-[100vh] bg-gradient-to-b from-mygo-color to-white"></div>
		</div>
	);
}
