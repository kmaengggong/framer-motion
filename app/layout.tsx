"use client";

import Footer from "@/components/layout/footer";
import { motion } from "framer-motion";
import "./globals.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/components/layout/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const [navOpacityValue, setNavOpacityValue] = useState<number>(0);
	const [navTranslateY, setNavTranslateY] = useState<number>(0);
	const [lastScrollY, setLastScrollY] = useState<number>(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (pathname === "/") {
				const vh = window.innerHeight;
				const threshold = vh * 2.4;
				const threshold2 = vh * 2.6;

				if (currentScrollY > threshold2) {
					setNavOpacityValue(1);
				} else if (currentScrollY > threshold) {
					setNavOpacityValue(0.8);
				} else {
					setNavOpacityValue(0);
				}
			} else {
				if (currentScrollY <= 0) {
					setNavOpacityValue(1);
					setNavTranslateY(0);
				} else if (currentScrollY > lastScrollY) {
					setNavOpacityValue(0);
					setNavTranslateY(-50);
				} else {
					setNavOpacityValue(1);
					setNavTranslateY(0);
				}
			}

			setLastScrollY(currentScrollY);
		};

		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollY, pathname]);

	return (
		<html lang="en">
			<body className="overflow-x-hidden min-h-screen m-0 flex flex-col items-center overflow-y-scroll scrollbar-hide bg-pink-300 overscroll-none">
				<div className="max-w-screen-md w-full relative">
					<motion.div
						style={{
							opacity: navOpacityValue,
							transform: `translate(-50%, ${navTranslateY}px)`,
							transition: "opacity 0.3s ease, transform 0.3s ease",
						}}
						className="fixed top-[10px] left-1/2 -translate-x-1/2 z-50 bg-gray-800 rounded-lg"
					>
						<Navbar />
					</motion.div>
					<div className="relative z-10">{children}</div>
					<Footer />
				</div>
			</body>
		</html>
	);
}
