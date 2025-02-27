interface CountProps {
	count: number
}

const LongText = ({count}: CountProps) => {
	return (
		<>
			{Array.from({ length: count }, (_, i) => (
				<p key={i}>{i + 1}</p>
			))}
		</>
	);
};

export default LongText;
