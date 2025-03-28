"use client";

import { motion } from "framer-motion";

interface FloatingTextProps {
	children: React.ReactNode;
}

const FloatingText = ({ children }: FloatingTextProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: false }}
			transition={{ ease: "easeInOut", duration: 1.5, y: { duration: 1 } }}
		>
			{children}
		</motion.div>
	);
};

export default FloatingText;
