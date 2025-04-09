import { fetchGuests } from "@/app/lib/data";
import NoteCard from "./noteCard";

const NoteCards = async () => {
	// <div key={guest.guest_id}>
	// 	{guest.guest_id}
	// 	{guest.chara_id}
	// 	{guest.temp_name}
	// 	{guest.ip_addr}
	// 	{guest.content}
	// 	{guest.created_at.toLocaleString()}
	// 	{guest.updated_at.toLocaleString()}
	// </div>
	const guests = await fetchGuests();

	return (
		<div className="columns-3 gap-2">
			{guests.map((guest) => (
				<NoteCard key={guest.guest_id} guest={guest} />
			))}
		</div>
	);
};

export default NoteCards;
