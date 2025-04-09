import React from "react";
import { Guest } from "@/app/lib/definitions";
import HText from "../text/hText";

const NoteCard = ({ guest }: { guest: Guest }) => {
	return (
		<div
			className="aspect-3/2 w-full mb-2 px-4 py-3 rounded-lg shadow-md whitespace-pre-wrap box-border break-inside-avoid opacity-90"
			style={{
				backgroundColor: guest.color,
			}}
		>
			<HText level={6} className="pb-4">
				{guest.content}
			</HText>
			<HText level={6} className="text-right font-semibold opacity-70">
				- {guest.temp_name}
			</HText>
		</div>
	);
};

export default NoteCard;
