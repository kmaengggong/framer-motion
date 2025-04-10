"use client";

const NoteModal = ({
	children,
	onClose,
}: {
	children: React.ReactNode;
	onClose: () => void;
}) => {
	return (
		<div
			className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
			onClick={onClose}
		>
			<div
				className="bg-white rounded-lg max-w-md w-full mx-4 shadow-xl p-4"
				onClick={(e) => e.stopPropagation()}
			>
				<button
					className="absolute top-2 right-4 text-gray-500 hover:text-black"
					onClick={onClose}
				>
					×
				</button>
				{children}
			</div>
		</div>
	);
};

export default NoteModal;
