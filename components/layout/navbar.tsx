"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const pathname = usePathname();
	const links = [
		{ name: "", href: "/" },
		{ name: "CHARA", href: "/chara" },
		{ name: "NOTES", href: "/notes" },
		{ name: "STATS", href: "/stats" },
		{ name: "GUSET", href: "/guest" },
		{ name: "ABOUT", href: "/about" },
	];

	return (
		<nav className="flex flex-row px-2 max-sm:px-1 py-2 opacity-90">
			{links.map((link) => (
				<div key={link.name} className="relative">
					<Link
						href={link.href}
						className={clsx(
							"block hover:opacity-70 px-3 max-sm:px-2 max-xs:px-1 transition duration-300 text-base max-sm:text-sm font-semibold ", pathname === link.href ? "text-mygo-color" : "text-white"
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