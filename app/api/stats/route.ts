import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { getClientIP } from "@/app/utils/request";
import { StatsResult } from "@/app/lib/definitions";

export async function GET(
	req: NextRequest,
	{ params }: { params: { language: string; order: string } }
) {
	try {
		const language = params.language;
		const order = params.order;

		let charaPairSelect = "";
		let groupByNames = "";

		if (language === "EN") {
			charaPairSelect = 'CONCAT(C.EN_SHORT_NAME, " / ", C2.EN_SHORT_NAME)';
			groupByNames = "C.EN_SHORT_NAME, C2.EN_SHORT_NAME";
		} else if (language === "JP") {
			charaPairSelect = 'CONCAT(C.JP_SHORT_NAME, " / ", C2.JP_SHORT_NAME)';
			groupByNames = "C.JP_SHORT_NAME, C2.JP_SHORT_NAME";
		} else {
			charaPairSelect = 'CONCAT(C.KR_SHORT_NAME, " / ", C2.KR_SHORT_NAME)';
			groupByNames = "C.KR_SHORT_NAME, C2.KR_SHORT_NAME";
		}

		const orderByClause = order === "ASC" ? "STATS_COUNT" : "STATS_COUNT DESC";

		const query = `
			SELECT
				${charaPairSelect} AS CHARA_PAIR,
				C.COLOR AS CHARA_A_COLOR,
				C2.COLOR AS CHARA_B_COLOR,
				COUNT(S.STATS_ID) AS STATS_COUNT
			FROM
				STATS AS S
				INNER JOIN CHARA AS C ON S.CHARA_A_ID = C.CHARA_ID
				INNER JOIN CHARA AS C2 ON S.CHARA_B_ID = C2.CHARA_ID
			GROUP BY
				S.CHARA_A_ID,
				S.CHARA_B_ID,
				${groupByNames},
				C.COLOR,
				C2.COLOR
			ORDER BY
				${orderByClause}
		`;

		const data = await sql<StatsResult>`${query}`;

		return NextResponse.json(data.rows);
	} catch (error) {
		console.error("API Error: ", error);
		return NextResponse.json({ message: "Database error" }, { status: 500 });
	}
}

export async function POST(req: NextRequest) {
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
	} catch (error) {
		console.error("API Error: ", error);
		return NextResponse.json({ message: "Database error" }, { status: 500 });
	}
}
