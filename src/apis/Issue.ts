import axios from 'axios';

export const getIssues = async () => {
	const res = await axios.get('https://api.github.com/repos/angular/angular-cli/issues?sort=comments&page=1&per_page=8', {
		headers: { Authorization: `token ${import.meta.env.VITE_API_KEY}` },
	});
	return res.data;
};

export function getDetailIssues(number: string) {
	return axios.get(`https://api.github.com/repos/angular/angular-cli/issues/${number}`, {
		headers: { Authorization: `token ${import.meta.env.VITE_API_KEY}` },
	});
}
