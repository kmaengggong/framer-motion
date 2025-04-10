"use client";

import { useState } from "react";
import NoteCard from "./noteCard";
import { Guest } from "@/app/lib/definitions";
import NoteModal from "./noteModal";

const NoteCards = ({ guests }: { guests: Guest[] }) => {
	const [selectedNote, setSelectedNote] = useState<Guest | null>(null);

	return (
		<>
			<div className="columns-3 gap-2 max-sm:columns-2">
				{guests.map((guest) => (
					<div key={guest.guest_id} onClick={() => setSelectedNote(guest)}>
						<NoteCard key={guest.guest_id} guest={guest} />
					</div>
				))}
			</div>

			{selectedNote && (
				<NoteModal onClose={() => setSelectedNote(null)}>
					<div className="p-6 space-y-4">
						<p className="whitespace-pre-wrap text-lg">
							{selectedNote.content}
						</p>
						<p className="text-right text-sm opacity-70">
							- {selectedNote.temp_name}
						</p>
					</div>
				</NoteModal>
			)}
		</>
	);
};

export default NoteCards;
