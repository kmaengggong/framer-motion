"use client";

import "./globals.css";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { scrollYProgress } = useScroll();
	const pathname = usePathname();
	const navOpacity =
		pathname === "/"
			? useTransform(scrollYProgress, [0.5, 1.5], [0, 1])
			: useTransform(scrollYProgress, [1], [1]);

	return (
		<html lang="en">
			<body className="m-0 overflow-hidden flex flex-col min-h-screen justify-center items-center bg-pink-300">
				<div className="w-full max-w-screen-md shadow-xl relative bg-green-400">
					<div
						className="h-screen overflow-y-auto scrollbar-hide flex flex-col bg-blue-300 overflow-x-hidden"
						style={{
							scrollbarWidth: "none",
							msOverflowStyle: "none",
							WebkitOverflowScrolling: "touch",
						}}
					>
						<motion.div style={{ opacity: navOpacity }} className="fixed top-[10px] left-1/2 -translate-x-1/2 z-50 bg-gray-800">
							<Navbar />
						</motion.div>
						<div className="flex-grow bg-orange-300">{children}</div>
						<Footer />
					</div>
				</div>
			</body>
		</html>
	);
}
