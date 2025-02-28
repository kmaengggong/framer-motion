"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const pathname = usePathname();
	const links = [
		{ name: "HOME", href: "/" },
		{ name: "CHARA", href: "/chara" },
		{ name: "GUSET", href: "/guest" },
		{ name: "ABOUT", href: "/about" },
	];

	return (
		<nav className="flex flex-row gap-4 opacity-90">
			{links.map((link) => (
				<div key={link.name} className="relative">
					<Link
						href={link.href}
						className={clsx(
							"block px-3 py-2 hover:opacity-70 transition duration-300 ", pathname === link.href ? "text-[#77bbdd]" : "text-white"
						)}
					>
						{link.name}
					</Link>
				</div>
			))}
		</nav>
	);
}

export default Navbar;