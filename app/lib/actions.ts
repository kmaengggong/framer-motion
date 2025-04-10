"use server";

import { sql } from "@vercel/postgres";
import { getClientIP } from "../utils/request";
import { redirect } from "next/navigation";

export async function createStats(formData: FormData) {
	const charaAId = formData.get("charaAId") as string;
	const charaBId = formData.get("charaBId") as string;
	const ipAddr = await getClientIP();

	try {
		await sql`
			INSERT INTO STATS (CHARA_A_ID, CHARA_B_ID, IP_ADDR, UPDATED_AT)
			VALUES (${charaAId}, ${charaBId}, ${ipAddr}, CURRENT_TIMESTAMP)
		`;
		redirect("/stats?success=1");
	} catch (error) {
		console.error("Database Error: ", error);
		throw new Error("Failed to create stats data");
	}
}
