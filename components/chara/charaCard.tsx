"use client";

import { motion } from "motion/react";
import CharaImage from "./charaImage";
import HText from "../text/hText";
import H4Text from "../text/h4Text";
import H6Text from "../text/h6Text";
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
	textColor: string;
	description: string;
	links: Link[];
}

const CharaCard = (props: CharaCardProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: false }}
			transition={{
				ease: "easeInOut",
				duration: 1.5,
				y: { duration: 1 },
			}}
			className={`rounded-md mb-12 p-4 flex`}
			style={{ backgroundColor: props.color }}
		>
			<CharaImage src={props.src} />
			<div className="ml-4 flex flex-col w-full justify-between">
				<div className="">
					<HText level={2} color={props.textColor} className="text-right">{props.name}</HText>
					<HText level={4} color={props.textColor} className="opacity-80">{props.description}</HText>
					{/* <H4Text color={props.textColor} alignment="right">{props.name}</H4Text>
					<H6Text color={props.textColor}>{props.description}</H6Text> */}
				</div>
				<div>
					{props.links.map((link, index) => (
						<div className="pb-2" key={index}>
							<IconButton
								icon={link.icon}
								text={link.text}
								link={link.link}
								color={props.textColor}
							/>
						</div>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default CharaCard;
