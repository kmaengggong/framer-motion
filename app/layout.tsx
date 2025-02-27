// "use client";

// import "./globals.css";
// import Footer from "@/components/layout/footer";
// import Navbar from "@/components/layout/navbar";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { usePathname } from "next/navigation";

// export default function RootLayout({
// 	children,
// }: Readonly<{
// 	children: React.ReactNode;
// }>) {
// 	const { scrollYProgress } = useScroll();
// 	const pathname = usePathname();
// 	const navOpacity =
// 		pathname === "/"
// 			? useTransform(scrollYProgress, [0.5, 1.5], [0, 1])
// 			: useTransform(scrollYProgress, [1], [1]);

// 	return (
// 		<html lang="en">
// 			<body className="m-0 overflow-hidden flex flex-col min-h-screen justify-center items-center bg-pink-300">
// 				<div className="w-full max-w-screen-md shadow-xl relative bg-green-400">
// 					<div
// 						className="h-screen overflow-y-auto scrollbar-hide flex flex-col bg-blue-300 overflow-x-hidden"
// 						style={{
// 							scrollbarWidth: "none",
// 							msOverflowStyle: "none",
// 							WebkitOverflowScrolling: "touch",
// 						}}
// 					>
// 						<motion.div style={{ opacity: navOpacity }} className="fixed top-[10px] left-1/2 -translate-x-1/2 z-50 bg-gray-800">
// 							<Navbar />
// 						</motion.div>
// 						<div className="flex-grow bg-orange-300">{children}</div>
// 						<Footer />
// 					</div>
// 				</div>
// 			</body>
// 		</html>
// 	);
// }

// layout.tsx

"use client";

import Footer from "@/components/layout/footer";
import { motion, useScroll, useTransform } from "framer-motion";
import "./globals.css"; // 전역 CSS 파일
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/components/layout/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
	const { scrollYProgress } = useScroll();
	const pathname = usePathname();
	const [navOpacityValue, setNavOpacityValue] = useState<number>(1);
	const navOpacity = pathname === "/"
		? useTransform(scrollYProgress, [0.7, 0.9], [0, 1])
		: useTransform(scrollYProgress, [1], [1]);

	useEffect(() => {
		const unsubscribe = navOpacity.onChange((v) => {
			setNavOpacityValue(v);
		});

		return () => {
			unsubscribe();
		};
	}, [navOpacityValue]);

	return (
		<html lang="en">
			<body className="overflow-x-hidden overflow-y-scroll scrollbar-hide">
				<motion.div
					style={{
						opacity: navOpacity,
						pointerEvents: navOpacityValue === 0 ? "none" : "auto",
					}}
					className="fixed top-[10px] left-1/2 -translate-x-1/2 z-50 bg-gray-800 rounded-lg"
				>
					<Navbar />
				</motion.div>
				<div className="relative z-10">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
