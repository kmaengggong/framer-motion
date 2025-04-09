import HText from "../text/hText";

interface IconButtonProps {
	icon: string;
	text: string;
	link: string;
	color?: string;
}

const IconButton = (props: IconButtonProps) => {
	const { icon, text, link, color = "black" } = props;

	return (
		<a href={link} target="_blank" rel="noopner noreferrer">
			<button
				className={`flex w-full items-center px-4 py-2 rounded-md border border-${color} text-${color}`}
			>
				<img src={icon} alt="x" className="w-5 h-5 mr-2" />
				<HText level={4}>{text}</HText>
			</button>
		</a>
	);
};

export default IconButton;
