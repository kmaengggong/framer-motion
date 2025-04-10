export type Chara = {
	chara_id: string;
	kr_name: string;
	jp_name: string;
	en_name: string;
	kr_short_name: string;
	jp_short_name: string;
	en_short_name: string;
	color: string;
	created_at: Date;
	updated_at: Date;
};

export type Guest = {
	guest_id: string;
	chara_id: string;
	temp_name: string;
	ip_addr: string;
	content: string;
	created_at: Date;
	updated_at: Date;

	color: string;
};

export type Stats = {
	stats_id: string;
	chara_a_id: string;
	chara_b_id: string;
	ip_addr: string;
	created_at: Date;
	updated_at: string;
};

export type StatsResult = {
	chara_pair: string;
	stats_count: number;
	chara_a_color: string;
	chara_b_color: string;
};
