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
	const [target, setTarget] = useState('');
	const [page, setPage] = useState(0);
	const defaultPage = 8;
	const isLastIssue = issueList.length < page - defaultPage;
	const loadingMessage = isLastIssue ? '' : '로딩 중∙∙∙';

	const onIntersect = ([entry]: any) => {
		if (entry.isIntersecting) {
			setPage((perv: number) => perv + defaultPage);
		}
	};

	useEffect(() => {
		let observer: any;
		if (target) {
			observer = new IntersectionObserver(onIntersect, { threshold: 1 });
			observer.observe(target);
		}
		return () => observer?.disconnect();
	}, [target]);

	const getList = () => {
		getIssues(page).then((data: any) => {
			setIssue(data);
		});
	};

	useEffect(() => {
		!isLastIssue && getList();
	}, [page]);

	if (loading) return <Loading />;
	if (error) return <Error />;
	console.log(issue);

	return <IssueContext.Provider value={{ issueList, newUserList, setTarget, loadingMessage }}>{children}</IssueContext.Provider>;
};

export default IssueProvider;
