import { createContext, useState, useEffect } from 'react';
import { getIssues } from '../apis/Issue';
import { Issue, User } from '../utils/interface';
export const IssueContext = createContext({});

interface Props {
	children: JSX.Element | JSX.Element[];
}

export const IssueProvider = ({ children }: Props) => {
	const [issue, setIssue] = useState<any>([{}]);
	const [isLoading, setIsLoading] = useState(false);

	const issueList =
		issue &&
		issue.map((el: any) => {
			let issues: Issue = {
				id: el.id,
				number: el.number,
				title: el.title,
				created_at: el.created_at,
				updated_at: el.updated_at,
				comments: el.comments,
				state: el.state,
			};
			return issues;
		});

	const userList =
		issue &&
		issue.map((el: any): any => {
			return el.user;
		});

	const newUserList =
		userList &&
		userList.map((el: any) => {
			let data: User = {
				login: el && el.login,
				avatar_url: el && el.avatar_url,
				html_url: el && el.html_url,
			};
			return data;
		});

	async function fetchIssues() {
		const data: [] = await getIssues();
		setIssue(data);
	}
	useEffect(() => {
		fetchIssues();
		setIsLoading(true);
	}, []);
	if (isLoading) return null;
	return <IssueContext.Provider value={{ issueList, newUserList }}>{children}</IssueContext.Provider>;
};
