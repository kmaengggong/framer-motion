import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { getClientIP } from "@/app/utils/request";

export async function POST(req: Request) {
	try {
		const formData = await req.formData();
		const charaAId = formData.get("charaAId") as string;
		const charaBId = formData.get("charaBId") as string;
		const ipAddr = await getClientIP();

		if (!charaAId || !charaBId) {
			return NextResponse.json({ message: "Invalid input" }, { status: 400 });
		}

		await sql`
			INSERT INTO STATS (CHARA_A_ID, CHARA_B_ID, IP_ADDR, UPDATED_AT)
			VALUES (${charaAId}, ${charaBId}, ${ipAddr}, CURRENT_TIMESTAMP)
		`;

		return NextResponse.json({ message: "Success" }, { status: 200 });
	} catch (err) {
		console.error("API Error:", err);
		return NextResponse.json({ message: "Database error" }, { status: 500 });
	}
}
