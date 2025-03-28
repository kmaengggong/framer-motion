import { color } from "chart.js/helpers";
import CharaCard from "./charaCard";

const cards = [
	{
		id: 1,
		name: "Tomori",
		color: "#77BBDD",
		textColor: "#FFFFFF",
		description: "Takamatsu",
		links: [
			{ icon: "https://images.steamusercontent.com/ugc/2099298701055209655/757BD229878D84B172AF37CD624601C8C73E004A/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", text: "mygo logo", link: "https://www.google.com" },
			{ icon: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Google_2015_logo.svg", text: "google", link: "https://www.google.com" },
		],
	},
	{
		id: 2,
		name: "Anon",
		color: "#FF8899",
		textColor: "#FFFFFF",
		description: "Chihaya",
		links: [
			{ icon: "", text: "", link: "" },
			{ icon: "", text: "", link: "" },
		],
	},
	{
		id: 3,
		name: "Rana",
		color: "#77DD77",
		textColor: "#FFFFFF",
		description: "Kaname",
		links: [
			{ icon: "", text: "", link: "" },
			{ icon: "", text: "", link: "" },
		],
	},
	{
		id: 4,
		name: "Soyo",
		color: "#FFDD88",
		textColor: "#000000",
		description: "Nagasaki",
		links: [
			{ icon: "", text: "", link: "" },
			{ icon: "", text: "", link: "" },
		],
	},
	{
		id: 5,
		name: "Taki",
		color: "#7777AA",
		textColor: "#FFFFFF",
		description: "Shiina",
		links: [
			{ icon: "", text: "", link: "" },
			{ icon: "", text: "", link: "" },
		],
	},
];

const CharaCards = () => {
	return (
		<div className="opacity-90">
			{cards.map((card, _) => (
				<CharaCard
					src={card.id.toString()}
					name={card.name}
					color={card.color}
					textColor={card.textColor}
					description={card.description}
					links={card.links}
					key={card.id}
				/>
			))}
		</div>
	);
};

export default CharaCards;
