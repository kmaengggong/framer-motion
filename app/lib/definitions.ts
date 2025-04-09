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
	chara_pair: string;
	stats_count: number;
	chara_a_color: string;
	chara_b_color: string;
}