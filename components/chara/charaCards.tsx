import { useState } from "react";
import CharaCard from "./charaCard";

// const cards = [
// 	{
// 		id: 1,
// 		name: "Tomori",
// 		color: "tomori-color",
// 		description: "Takamatsu",
// 		links: [
// 			{ icon: "https://images.steamusercontent.com/ugc/2099298701055209655/757BD229878D84B172AF37CD624601C8C73E004A/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", text: "mygo logo", link: "https://www.google.com" },
// 			{ icon: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Google_2015_logo.svg", text: "google", link: "https://www.google.com" },
// 		],
// 	},
// 	{
// 		id: 2,
// 		name: "Anon",
// 		color: "anon-color",
// 		description: "Chihaya",
// 		links: [
// 			{ icon: "", text: "", link: "" },
// 			{ icon: "", text: "", link: "" },
// 		],
// 	},
// 	{
// 		id: 3,
// 		name: "Rana",
// 		color: "rana-color",
// 		description: "Kaname",
// 		links: [
// 			{ icon: "", text: "", link: "" },
// 			{ icon: "", text: "", link: "" },
// 		],
// 	},
// 	{
// 		id: 4,
// 		name: "Soyo",
// 		color: "soyo-color",
// 		description: "Nagasaki",
// 		links: [
// 			{ icon: "", text: "", link: "" },
// 			{ icon: "", text: "", link: "" },
// 		],
// 	},
// 	{
// 		id: 5,
// 		name: "Taki",
// 		color: "taki-color",
// 		description: "Shiina",
// 		links: [
// 			{ icon: "", text: "", link: "" },
// 			{ icon: "", text: "", link: "" },
// 		],
// 	},
// ];

const CharaCards = () => {
	const [charas, setCharas] = useState<Chara();

	return (
		<div className="opacity-90">
			{cards.map((card, _) => (
				<CharaCard card={card}
					// src={card.id.toString()}
					// name={card.name}
					// color={card.color}
					// description={card.description}
					// links={card.links}
					// key={card.id}
				/>
			))}
		</div>
	);
};

export default CharaCards;
