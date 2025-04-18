import { Chara } from "@/app/lib/definitions";
import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, {params}: {params: {id: string}}) {
	try {
		const id = params.id;

		const data = await sql<Chara>`
			SELECT * FROM CHARA
			WHERE CHARA_ID = ${id}
			LIMIT 1
		`;

		return NextResponse.json(data.rows[0]);
	} catch (error) {
		console.error("API Error: ", error);
		return NextResponse.json({ message: "Database error" }, { status: 500 });
	}
}