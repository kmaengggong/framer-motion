import { Guest } from "@/app/lib/definitions";
import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	try {
		const data = await sql<Guest>`
			SELECT G.*, C.COLOR
			FROM GUEST AS G
			INNER JOIN CHARA AS C ON G.CHARA_ID = C.CHARA_ID
		`;

		return NextResponse.json(data.rows);
	} catch (error) {
		console.error("API Error: ", error);
		return NextResponse.json({ message: "Database error" }, { status: 500 });
	}
}
