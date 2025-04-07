import Image from "next/image";

interface CharaImageProps {
	src: string;
}

const CharaImage = (props: CharaImageProps) => {
	return (
		<div className="flex-shrink-0 overflow-hidden">
			{/* <img src={props.src} alt={props.src} /> */}
			<Image
				src={`https://picsum.photos/id/1${props.src}/200/300`}
				alt={props.src}
				width={300}
				height={400}
				className="w-full h-full object-cover"
				sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, (max-width: 1024px) 500px, 600px"
			/>
		</div>
	);
};

export default CharaImage;
