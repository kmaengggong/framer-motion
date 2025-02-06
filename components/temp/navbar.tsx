"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import "./navbar.css";
import { useEffect, useState } from "react";

// const Navbar = () => {
// 	const pathname = usePathname();
// 	const links = [
// 		{ name: "HOME", href: "/test0" },
// 		{ name: "CHARA", href: "/chara" },
// 		{ name: "GUSET", href: "/guest" },
// 		{ name: "ABOUT", href: "/about" },
// 	];

// 	return (
// 		<nav className="flex flex-row gap-4">
// 			{links.map((link) => (
// 				<div key={link.name} className="relative">
// 					<Link
// 						href={link.href}
// 						className={clsx(
// 							"block px-3 py-2 hover:opacity-70 transition duration-300",
// 							{ "selected" : pathname === link.href }
// 						)}
// 					>
// 						{link.name}
// 						{/* {pathname === link.href && (
// 							<motion.div
// 								className="underline" layoutId="underline"
// 							/>
// 						)} */}
// 					</Link>
// 				</div>
// 			))}
// 		</nav>
// 	);
// }

const Navbar = () => {
	const [isVisible, setIsVisible] = useState(false);
	const links = [
		{ name: "HOME", href: "/test0" },
		{ name: "CHARA", href: "/chara" },
		{ name: "GUSET", href: "/guest" },
		{ name: "ABOUT", href: "/about" },
	];

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			if (scrollPosition >= 150 && scrollPosition <= 200) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<motion.nav
			className={`fixed top-0 left-0 w-full bg-white`}
			style={{ opacity: isVisible ? 1 : 0 }}
			transition={{ duration: 0.3 }}
		>
			<nav className="flex flex-row gap-4">
				{links.map((link) => (
					<div key={link.name} className="relative">
						<Link
							href={link.href}
							className={clsx(
								"block px-3 py-2 hover:opacity-70 transition duration-300", ""
								// { selected: pathname === link.href }
							)}
						>
							{link.name}
							{/* {pathname === link.href && (
 							<motion.div
 								className="underline" layoutId="underline"
 							/>
 						)} */}
						</Link>
					</div>
				))}
			</nav>
		</motion.nav>
	);
};

export default Navbar;
