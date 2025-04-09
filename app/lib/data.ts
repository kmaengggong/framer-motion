import { sql } from "@vercel/postgres";
import { Guest, Stats } from "./definitions";

// export async function fetchCharas() {

// };

export async function fetchGuests() {
	try {
		// // 3초 딜레이 테스트
		// console.log("Fetching guest data...");
		// await new Promise((resolve) => setTimeout(resolve, 3000));

		const data = await sql<Guest>`
			SELECT G.*, C.COLOR
			FROM GUEST AS G
			JOIN CHARA AS C ON G.CHARA_ID = C.CHARA_ID
		`;

		return data.rows;
	} catch (error) {
		console.error("Database Error: ", error);
		throw new Error("Failed to fetch guest data");
	}
}

export async function fetchStats() {
	try {
		// TODO: 나중에 created_at 가지고 시기별이랑 order by도 추가
		const data = await sql<Stats>`
			SELECT
				CONCAT(LEFT(C.EN_NAME, 4), LEFT(C2.EN_NAME, 4)) AS CHARA_PAIR,
				C.COLOR AS CHARA_A_COLOR,
				C2.COLOR AS CHARA_B_COLOR,
				COUNT(S.STATS_NAME) AS STATS_COUNT
			FROM
				STATS AS S
				INNER JOIN CHARA AS C ON S.CHARA_A_ID = C.CHARA_ID
				INNER JOIN CHARA AS C2 ON S.CHARA_B_ID = C2.CHARA_ID
			GROUP BY
				S.CHARA_A_ID,
				S.CHARA_B_ID,
				C.EN_NAME,
				C2.EN_NAME,
				C.COLOR,
				C2.COLOR
			ORDER BY
				STATS_COUNT DESC;
		`;
		return data.rows;
	} catch (error) {
		console.error("Database Error: ", error);
		throw new Error("Failed to fetch stats data");
	}
}

// export async function fetchNotes() {

// };
