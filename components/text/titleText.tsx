import { Fragment, ReactNode } from "react";

const TitleText: React.FC<{
	children: ReactNode;
	className?: string;
}> = ({ children, className = "" }) => {
	return (
		<Fragment>
			<p
				className={`text-2xl max-sm:text-xl font-extrabold text-slate-700 mb-1 ${className}`}
			>
				{children}
			</p>
			<div className="mb-2 border-t border-slate-700" />
		</Fragment>
	);
};

export default TitleText;
