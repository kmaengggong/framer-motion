const H4Text = ({
	color = "light",
	alignment = "left",
	children,
}: {
	color?: string;
	alignment?: string;
	children: React.ReactNode;
}) => {
	return (
		<h4
			className={`text-lg font-semibold ${
				color === "light" ? "text-black" : "text-white"
			} ${alignment === "right" ? "text-right" : "text-left"}`}
		>
			{children}
		</h4>
	);
};

export default H4Text;
