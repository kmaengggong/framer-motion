import FloatingText from "@/components/text/floatingText";

// "use client";

// import {
// 	motion,
// 	MotionValue,
// 	useScroll,
// 	useSpring,
// 	useTransform,
// } from "motion/react";
// import { useRef } from "react";

// function useParallax(value: MotionValue<number>, distance: number) {
// 	return useTransform(value, [0, 1], [-distance, distance]);
// }

// function Image({ id }: { id: number }) {
// 	const ref = useRef(null);
// 	const { scrollYProgress } = useScroll({ target: ref });
// 	const y = useParallax(scrollYProgress, 300);

// 	return (
// 		<section className="img-container">
// 			<div ref={ref}>
// 				<img src={`/photos/cityscape/${id}.jpg`} alt="A London skyscraper" />
// 			</div>
// 			<motion.h2
// 				// Hide until scroll progress is measured
// 				initial={{ visibility: "hidden" }}
// 				animate={{ visibility: "visible" }}
// 				style={{ y }}
// 			>{`#00${id}`}</motion.h2>
// 		</section>
// 	);
// }

// export default function CharaPage() {
// 	const { scrollYProgress } = useScroll();
// 	const scaleX = useSpring(scrollYProgress, {
// 		stiffness: 100,
// 		damping: 30,
// 		restDelta: 0.001,
// 	});

// 	return (
// 		<div className="h-[500vh] bg-gradient-to-b from-[#77bbdd] to-white px-4 pb-20">
// 			{[1, 2, 3, 4, 5].map((image) => (
// 				<Image key={image} id={image} />
// 			))}
// 			<StyleSheet />
// 		</div>
// 	);
// }

// /**
//  * ==============   Styles   ================
//  */

// function StyleSheet() {
// 	return (
// 		<style>{`
// 		.img-container {
// 			height: 100vh;
// 			scroll-snap-align: start;
// 			display: flex;
// 			justify-content: center;
// 			align-items: center;
// 			position: relative;
// 		}

// 		.img-container > div {
// 			width: 300px;
// 			height: 400px;
// 			margin: 20px;
// 			background: #f5f5f5;
// 			overflow: hidden;
// 		}

// 		.img-container img {
// 			width: 300px;
// 			height: 400px;
// 		}

// 		@media (max-width: 500px) {
// 			.img-container > div {
// 				width: 150px;
// 				height: 200px;
// 			}

// 			.img-container img {
// 				width: 150px;
// 				height: 200px;
// 			}
// 		}

// 		.img-container h2 {
// 			color: #4ff0b7;
// 			margin: 0;
// 			font-family: "Azeret Mono", monospace;
// 			font-size: 50px;
// 			font-weight: 700;
// 			letter-spacing: -3px;
// 			line-height: 1.2;
// 			position: absolute;
// 			display: inline-block;
// 			top: calc(50% - 25px);
// 			left: calc(50% + 120px);
// 		}
// 	`}</style>
// 	);
// }

export default function CharaPage() {
	return (
		<div className="h-[100vh] bg-gradient-to-b from-[#77bbdd] to-white px-4 py-20">
			{[...Array(100)].map((_, index) => (
				<FloatingText key={index} text={"아논소요"} />
			))}
		</div>
	);
}
