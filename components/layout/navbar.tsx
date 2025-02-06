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
		<nav className="flex flex-row gap-4">
			{links.map((link) => (
				<div key={link.name} className="relative">
					<Link
						href={link.href}
						className={clsx(
							"block px-3 py-2 hover:opacity-70 transition duration-300", ""
							
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