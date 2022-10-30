export interface Issue {
	id: number;
	number: number;
	title: string;
	user?: User;
	created_at: string;
	updated_at: string;
	comments: number;
	body?: string;
	state: 'open' | 'closed' | 'all';
}

export interface User {
	login: string;
	avatar_url: string;
	html_url?: string;
}
