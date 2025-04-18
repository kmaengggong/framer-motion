"use client";

import { useEffect, useState } from "react";
import GuestCard from "./guestCard";
import { Guest } from "@/app/lib/definitions";
import GuestModal from "./guestModal";

const GuestCards = () => {
	const [guests, setGuesets] = useState<Guest[] | null>(null);
	const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch("/api/guest", { method: "GET" });
				if (res.ok) {
					const json = await res.json();
					setGuesets(json);
				} else {
					alert("Failed to fetch guest");
				}
			} catch (error) {
				console.error("Fetch error: ", error);
			}
		};
		fetchData();
	}, []);

	return (
		<>
			<div className="columns-3 gap-2 max-sm:columns-2">
				{guests?.map((guest) => (
					<div key={guest.guest_id} onClick={() => setSelectedGuest(guest)}>
						<GuestCard key={guest.guest_id} guest={guest} />
					</div>
				))}
			</div>

			{selectedGuest && (
				<GuestModal onClose={() => setSelectedGuest(null)}>
					<div className="p-6 space-y-4">
						<p className="whitespace-pre-wrap text-lg">
							{selectedGuest.content}
						</p>
						<p className="text-right text-sm opacity-70">
							- {selectedGuest.temp_name}
						</p>
					</div>
				</GuestModal>
			)}
		</>
	);
};

export default GuestCards;
