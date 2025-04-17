"use client";

import { Chara } from "@/app/lib/definitions";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CharaSelects = () => {
	const router = useRouter();
	const [charas, setCharas] = useState<Chara[] | null>(null);
	const [charaAId, setCharaAId] = useState<string | null>(null);
	const [charaBId, setCharaBId] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch("/api/charas", { method: "GET" });
				if (res.ok) {
					const json = await res.json();
					setCharas(json);
				} else {
					alert("Failed to fetch charas");
				}
			} catch (error) {
				console.error("Fetch error: ", error);
			}
		};
		fetchData();
	}, []);

	const handleAChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setCharaAId(e.target.value || null);
	};

	const handleBChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setCharaBId(e.target.value || null);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!charaAId || !charaBId) {
			alert("Choose two characters.");
			return;
		}

		const formData = new FormData(e.currentTarget);

		const res = await fetch("/api/stats", {
			method: "POST",
			body: formData,
		});

		if (res.ok) {
			alert("Vote submitted!");
			router.refresh();
			setCharaAId(null);
			setCharaBId(null);
		} else {
			alert("Failed to submit vote.");
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col max-sm:gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-4"
		>
			<select
				name="charaAId"
				className="w-full text-sm h-10 px-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
				value={charaAId || ""}
				onChange={handleAChange}
			>
				<option value="">Select Character A</option>
				{charas?.map((chara) => (
					<option
						key={chara.chara_id}
						value={chara.chara_id}
						disabled={charaBId === chara.chara_id}
					>
						{chara.en_name}
					</option>
				))}
			</select>

			<select
				name="charaBId"
				className="w-full text-sm h-10 px-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
				value={charaBId || ""}
				onChange={handleBChange}
			>
				<option value="">Select Character B</option>
				{charas?.map((chara) => (
					<option
						key={chara.chara_id}
						value={chara.chara_id}
						disabled={charaAId === chara.chara_id}
					>
						{chara.en_name}
					</option>
				))}
			</select>

			<button
				type="submit"
				className="h-10 px-4 text-sm rounded-md bg-black text-white hover:bg-gray-800 transition disabled:opacity-50"
				disabled={!charaAId || !charaBId}
			>
				Vote
			</button>
		</form>
	);
};

export default CharaSelects;
