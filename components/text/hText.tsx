import { ReactNode } from "react";

const HText: React.FC<{
	level: 1 | 2 | 3 | 4 | 5 | 6;
	children: ReactNode;
	color?: string;
	className?: string;
}> = ({ level, children, color = "black", className = "" }) => {
	const baseStyles = "font-normal mb-1";

	let sizeClass = "";
	let fontWeightClass = "";

	switch (level) {
		case 1:
			sizeClass = "text-3xl max-sm:text-2xl";
			fontWeightClass = "font-bold";
			break;
		case 2:
			sizeClass = "text-2xl max-sm:text-xl";
			fontWeightClass = "font-semibold";
			break;
		case 3:
			sizeClass = "text-xl max-sm:text-lg";
			fontWeightClass = "font-semibold";
			break;
		case 4:
			sizeClass = "text-lg max-sm:text-base";
			fontWeightClass = "font-medium";
			break;
		case 5:
			sizeClass = "text-base max-sm:text-sm";
			fontWeightClass = "font-medium";
			break;
		case 6:
			sizeClass = "text-sm max-sm:text-xs";
			fontWeightClass = "font-normal";
			break;
		default:
			break;
	}

	return (
		<p
			className={`${baseStyles} ${sizeClass} ${fontWeightClass} ${className}`}
			style={{color: color}}
		>
			{children}
		</p>
	);
};

export default HText;
