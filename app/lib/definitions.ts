export type Chara = {
	chara_id: string;
	color: string;
	created_at: Date;
	updated_at: Date;
};

export type CharaTrans = {
	chara_id: string;
	lang: "KR" | "EN" | "JP";
	full_name: string;
	short_name: string;
	description: string;
};

export type CharaLinks = {
	chara_id: string;
	
}

export type Guest = {
	guest_id: string;
	chara_id: string;
	temp_name: string;
	ip_addr: string;
	content: string;
	created_at: Date;
	updated_at: Date;
};

export type GuestLikes = {
	guest_id: string;
	ip_addr: string;
	liked_at: Date;
};

export type Stats = {
	stats_id: string;
	chara_a_id: string;
	chara_b_id: string;
	ip_addr: string;
	created_at: Date;
	updated_at: Date;
};

export type Notes = {
	notes_id: string;
	title: string;
	content: string;
	view: number;
	created_at: Date;
	updated_at: Date;
};

// export type Chara = {
// 	chara_id: string;
// 	kr_name: string;
// 	jp_name: string;
// 	en_name: string;
// 	kr_short_name: string;
// 	jp_short_name: string;
// 	en_short_name: string;
// 	color: string;
// 	created_at: Date;
// 	updated_at: Date;
// };

// export type Guest = {
// 	guest_id: string;
// 	chara_id: string;
// 	temp_name: string;
// 	ip_addr: string;
// 	content: string;
// 	created_at: Date;
// 	updated_at: Date;

// 	color: string;
// };

// export type Stats = {
// 	stats_id: string;
// 	chara_a_id: string;
// 	chara_b_id: string;
// 	ip_addr: string;
// 	created_at: Date;
// 	updated_at: Date;
// };

// export type StatsResult = {
// 	chara_pair: string;
// 	stats_count: number;
// 	chara_a_color: string;
// 	chara_b_color: string;
// };

// export type Notes = {
// 	notes_id: string;
// 	title: string;
// 	content: string;
// 	created_at: Date;
// 	updated_at: Date;
// };
