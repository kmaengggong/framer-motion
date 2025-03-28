interface CharaImageProps {
	src: string;
}

const CharaImage = (props: CharaImageProps) => {
	return (
		<div className="flex-shrink-0 w-[250px] h-[400px] overflow-hidden">
			{/* <img src={props.src} alt={props.src} /> */}
			<img
				src={`https://picsum.photos/id/1${props.src}/200/300`}
				alt={props.src}
				className="w-full h-full object-cover"
			/>
		</div>
	);
};

export default CharaImage;
