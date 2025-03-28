const H3Text = ({
	color = "light",
	alignment = "left",
	children,
}: {
	color?: string;
	alignment?: string;
	children: React.ReactNode;
}) => {
	return (
		<h3
			className={`text-base font-semibold ${
				color === "light" ? "text-black" : "text-white"
			} ${alignment === "right" ? "text-right" : "text-left"}`}
		>
			{children}
		</h3>
	);
};

export default H3Text;
