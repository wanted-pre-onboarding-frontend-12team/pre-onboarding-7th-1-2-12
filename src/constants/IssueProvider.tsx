import React, { createContext, useState, useEffect } from 'react';
import { getIssues } from '../apis/Issue';
import { Issue, User } from '../utils/interface';
import { useStatusState, useStatusDispatch } from './useStatus';
import Loading from '../components/Loading/index';
import Error from '../pages/Error';
export const IssueContext = createContext({});

interface Props {
	children: React.ReactNode;
}

const IssueProvider = ({ children }: Props) => {
	const [issue, setIssue] = useState<any>([{}]);
	const state: any = useStatusState();
	const dispatch: any = useStatusDispatch();
	const { loading, error } = state.status;

	const issueList: any =
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

	const newUserList: any =
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
		dispatch({ type: 'STATUS_LOADING' });
		try {
			const data: [] = await getIssues();
			setIssue(data);
			dispatch({ type: 'STATUS_END' });
		} catch (err) {
			dispatch({ type: 'STATUS_ERROR' });
		}
	}
	useEffect(() => {
		fetchIssues();
	}, []);

	if (loading) return <Loading />;
	if (error) return <Error />;
	return <IssueContext.Provider value={{ issueList, newUserList }}>{children}</IssueContext.Provider>;
};

export default IssueProvider;
