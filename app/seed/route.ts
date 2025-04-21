import { db } from "@vercel/postgres";
import { charas, chara_trans, guests, notes, stats } from "../lib/placeholder-data";
import { NextRequest } from "next/server";

const client = await db.connect();

async function seedChara() {
	await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

	await client.sql`
		CREATE TABLE IF NOT EXISTS CHARA (
			CHARA_ID UUID DEFAULT UUID_GENERATE_V4() PRIMARY KEY,
			COLOR VARCHAR(7),
			CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
			UPDATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
		)
	`;

	const result = await client.sql`SELECT COUNT(*) FROM CHARA`;
	const count = Number(result.rows[0].count);
	if(count > 0) return;
	const insertedChara = await Promise.all(
		charas.map(async (chara) => {
			return client.sql`
				INSERT INTO CHARA (COLOR)
			`;
		})
	);
}

async function seedCharaLinks() {
	
}

async function seedGuest() {
	await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

	await client.sql`
		CREATE TABLE IF NOT EXISTS GUEST (
			GUEST_ID UUID DEFAULT UUID_GENERATE_V4() PRIMARY KEY,
			CHARA_ID UUID NOT NULL,
			TEMP_NAME TEXT NOT NULL,
			IP_ADDR INET NOT NULL,
			CONTENT TEXT NOT NULL,
			CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
			UPDATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

			CONSTRAINT FK_CHARA FOREIGN KEY (CHARA_ID) REFERENCES CHARA(CHARA_ID),
			CONSTRAINT CHK_CONTENT_LENGTH CHECK (CHAR_LENGTH(CONTENT) <= 200)
		)
	`;

	await client.sql`
		CREATE TABLE IF NOT EXISTS GUEST_LIKES (
			GUEST_ID UUID NOT NULL,
			IP_ADDR INET NOT NULL,
			CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
			UPDATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

			PRIMARY KEY (GUEST_ID, IP_ADDR),
			CONSTRAINT FK_GUEST FOREIGN KEY (GUEST_ID) REFERENCES GUEST(GUEST_ID)
		)
	`;
}

async function seedStats() {
	await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

	await client.sql`
		CREATE TABLE IF NOT EXISTS STATS (
			STATS_ID UUID DEFAULT UUID_GENERATE_V4() PRIMARY KEY,
			CHARA_A_ID UUID NOT NULL,
			CHARA_B_ID UUID NOT NULL,
			IP_ADDR INET NOT NULL,
			CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
			UPDATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

			CONSTRAINT FK_CHARA_A FOREIGN KEY (CHARA_A_ID) REFERENCES CHARA(CHARA_ID),
			CONSTRAINT FK_CHARA_B FOREIGN KEY (CHARA_B_ID) REFERENCES CHARA(CHARA_ID),
			CONSTRAINT CHK_DIFFERENT_CHARS CHECK (CHARA_A_ID <> CHARA_B_ID)
		)
	`;
}

async function seedNotes() {
	await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

	await client.sql`
		CREATE TABLE IF NOT EXISTS NOTES (
			NOTES_ID UUID DEFAULT UUID_GENERATE_V4() PRIMARY KEY,
			TITLE TEXT NOT NULL,
			CONTENT TEXT NOT NULL,
			VIEW INT DEFAULT 0,
			CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
			UPDATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
		)
	`;
}

export async function GET(req: NextRequest) {
	try {
		await client.sql`BEGIN`;
		await seedChara();
		await seedGuest();
		await seedStats();
		await seedNotes();
		await client.sql`COMMIT`;

		return Response.json({ message: "Database seeded successfully" });
	} catch (error) {
		await client.sql`ROLLBACK`;
		return Response.json({ error }, { status: 500 });
	}
}

// async function seedChara() {
// 	await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

// 	await client.sql`
// 		CREATE TABLE IF NOT EXISTS CHARA (
// 			CHARA_ID UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
// 			KR_NAME VARCHAR(10) NOT NULL,
// 			JP_NAME VARCHAR(10) NOT NULL,
// 			EN_NAME VARCHAR(20) NOT NULL,
// 			KR_SHORT_NAME VARCHAR(10) NOT NULL,
// 			JP_SHORT_NAME VARCHAR(10) NOT NULL,
// 			EN_SHORT_NAME VARCHAR(10) NOT NULL,
// 			COLOR VARCHAR(7),
// 			CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
// 			UPDATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// 		)
// 	`;

// 	const result = await client.sql`SELECT COUNT(*) FROM CHARA`;
// 	const count = Number(result.rows[0].count);

// 	if (count > 0) return [];

// 	const insertedChara = await Promise.all(
// 		charas.map(async (chara) => {
// 			return client.sql`
// 				INSERT INTO CHARA
// 					(KR_NAME, JP_NAME, EN_NAME, KR_SHORT_NAME, JP_SHORT_NAME, EN_SHORT_NAME, COLOR)
// 				VALUES
// 					(${chara.kr_name}, ${chara.jp_name}, ${chara.en_name}, ${chara.kr_short_name}, ${chara.jp_short_name}, ${chara.en_short_name}, ${chara.color})
// 			`;
// 		})
// 	);

// 	return insertedChara;
// }

// async function seedGuest() {
// 	await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

// 	// TODO: IS_TOP TRUE OR FALSE 추가
// 	// TODO: LIKES 추가?
// 	await client.sql`
// 		CREATE TABLE IF NOT EXISTS GUEST (
// 			GUEST_ID UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
// 			CHARA_ID UUID NOT NULL,
// 			TEMP_NAME VARCHAR(64),
// 			IP_ADDR INET NOT NULL,
// 			CONTENT TEXT NOT NULL,
// 			CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
// 			UPDATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

// 			CONSTRAINT FK_CHARA FOREIGN KEY (CHARA_ID) REFERENCES CHARA(CHARA_ID),
// 			CONSTRAINT CHK_CONTENT_LENGTH CHECK (CHAR_LENGTH(CONTENT) <= 200)
// 		)
// 	`;

// 	const result = await client.sql`SELECT COUNT(*) FROM GUEST`;
// 	const count = Number(result.rows[0].count);

// 	if (count > 0) return [];

// 	const resultChara = await client.sql`SELECT * FROM CHARA`;
// 	const charas = resultChara.rows;

// 	if (charas.length < 5) return;

// 	const insertedGuest = await Promise.all(
// 		guests.map(async (guest, i) => {
// 			return client.sql`
// 				INSERT INTO GUEST (CHARA_ID, TEMP_NAME, IP_ADDR, CONTENT)
// 				VALUES (${charas[i].chara_id}, ${guest.temp_name}, ${guest.ip_addr}, ${guest.content})
// 			`;
// 		})
// 	);

// 	return insertedGuest;
// }

// async function seedStats() {
// 	await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

// 	await client.sql`
// 		CREATE TABLE IF NOT EXISTS STATS (
// 			STATS_ID UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
// 			CHARA_A_ID UUID NOT NULL,
// 			CHARA_B_ID UUID NOT NULL,
// 			IP_ADDR INET NOT NULL,
// 			CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
// 			UPDATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

// 			CONSTRAINT FK_CHARA_A FOREIGN KEY (CHARA_A_ID) REFERENCES CHARA(CHARA_ID),
// 			CONSTRAINT FK_CHARA_B FOREIGN KEY (CHARA_B_ID) REFERENCES CHARA(CHARA_ID),
// 			CONSTRAINT CHK_DIFFERENT_CHARS CHECK (CHARA_A_ID <> CHARA_B_ID)
// 		)
// 	`;

// 	const result = await client.sql`SELECT COUNT(*) FROM STATS`;
// 	const count = Number(result.rows[0].count);

// 	if (count > 0) return [];

// 	const resultChara = await client.sql`SELECT * FROM CHARA`;
// 	const charas = resultChara.rows;

// 	if (charas.length < 5) return;

// 	const insertedStats = await Promise.all(
// 		stats.map(async (stat) => {
// 			return client.sql`
// 				INSERT INTO STATS (CHARA_A_ID, CHARA_B_ID, IP_ADDR)
// 				VALUES (${charas[stat.chara_a_idx].chara_id}, ${
// 				charas[stat.chara_b_idx].chara_id
// 			}, ${stat.ip_addr})
// 			`;
// 		})
// 	);

// 	return insertedStats;
// }

// async function seedNotes() {
// 	await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

// 	// TODO: VIEWS 추가?
// 	await client.sql`
// 		CREATE TABLE IF NOT EXISTS NOTES (
// 			NOTES_ID UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
// 			TITLE VARCHAR(255) NOT NULL,
// 			CONTENT TEXT NOT NULL,
// 			CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
// 			UPDATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// 		)
// 	`;

// 	const result = await client.sql`SELECT COUNT(*) FROM NOTES`;
// 	const count = Number(result.rows[0].count);

// 	if (count > 0) return [];

// 	const insertedNotes = await Promise.all(
// 		notes.map(async (note) => {
// 			return client.sql`
// 				INSERT INTO NOTES (TITLE, CONTENT)
// 				VALUES (${note.title}, ${note.content})
// 			`;
// 		})
// 	);

// 	return insertedNotes;
// }

// export async function GET() {
// 	try {
// 		await client.sql`BEGIN`;
// 		await seedChara();
// 		await seedGuest();
// 		await seedStats();
// 		await seedNotes();
// 		await client.sql`COMMIT`;

// 		return Response.json({ message: "Database seeded successfully" });
// 	} catch (error) {
// 		await client.sql`ROLLBACK`;
// 		return Response.json({ error }, { status: 500 });
// 	}
// }
