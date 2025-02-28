"use client";

import { motion } from "motion/react";

interface Text {
	text: string;
}

const FloatingText = (text: Text) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: false }}
			transition={{ ease: "easeInOut", duration: 1.5, y: { duration: 1 } }}
		>
			{text.text}
		</motion.div>
	);
};

export default FloatingText;
