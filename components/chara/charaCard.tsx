"use client";

import { motion } from "motion/react";
import CharaImage from "./charaImage";
import HText from "../text/hText";
import IconButton from "../button/iconButton";

interface Link {
	icon: string;
	text: string;
	link: string;
}

interface CharaCardProps {
	src: string;
	name: string;
	color: string;
	description: string;
	links: Link[];
}

const CharaCard = (props: CharaCardProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{
				ease: "easeInOut",
				duration: 1.5,
				y: { duration: 1 },
			}}
			className={`rounded-md mb-12 p-4 flex bg-tomori-color ${props.color}`}
		>
			<CharaImage src={props.src} />
			<div className="ml-4 flex flex-col w-full justify-between">
				<div className="">
					<HText level={2} className="text-right">{props.name}</HText>
					<HText level={4} className="opacity-80">{props.description}</HText>
				</div>
				<div>
					{props.links.map((link, index) => (
						<div className="pb-2" key={index}>
							<IconButton
								icon={link.icon}
								text={link.text}
								link={link.link}
							/>
						</div>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default CharaCard;
