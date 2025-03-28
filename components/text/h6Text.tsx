const H6Text = ({
	color = "light",
	alignment = "left",
	children,
}: {
	color?: string;
	alignment?: string;
	children: React.ReactNode;
}) => {
	return (
		<h6
			className={`text-sm ${color === "light" ? "text-black" : "text-white"} ${
				alignment === "right" ? "text-right" : "text-left"
			}`}
		>
			{children}
		</h6>
	);
};

export default H6Text;
