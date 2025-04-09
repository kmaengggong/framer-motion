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
		<nav className="flex flex-row px-3 py-2 content-evenly gap-2 opacity-90">
			{links.map((link) => (
				<div key={link.name} className="relative">
					<Link
						href={link.href}
						className={clsx(
							"block px-1 hover:opacity-70 transition duration-300 text-md max-sm:text-sm ", pathname === link.href ? "text-mygo-color" : "text-white"
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