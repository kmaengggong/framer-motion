import GuestCards from "@/components/guest/guestCards";
import { fetchGuests } from "../lib/data";

export default async function GuestPage() {
	// const guests = await fetchGuests();

	return (
		<div className="relative min-h-screen px-4 py-20 bg-white">
			<div className="absolute inset-0 h-[100vh] bg-gradient-to-b from-mygo-color to-white pointer-events-none"></div>

			<div className="relative">
				{/* <NoteCards guests={guests} /> */}
				<GuestCards />

				<div className="fixed grid grid-cols-6 gap-2 w-full h-[32px] px-3 bottom-[16px] left-1/2 -translate-x-1/2 z-50">
					<input
						className="w-full h-[36px] col-span-5 px-4 py-2 bg-white text-gray-800 placeholder-gray-400 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
						type="text"
					/>
					<button className="bg-slate-300 rounded-md">추가</button>
				</div>
			</div>
		</div>
	);
}
