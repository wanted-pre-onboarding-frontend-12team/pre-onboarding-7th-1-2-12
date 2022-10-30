import { useEffect, useState } from 'react';
import { getIssues } from '../../apis/Issue';

export default function useInfinityScroll() {
	const [issueList, setIssueList] = useState([]);
	const [target, setTarget] = useState('');
	const [page, setPage] = useState(0);
	const defaultPage = 8;
	const isLastIssue = issueList.length < page - defaultPage;
	const loadingMessage = isLastIssue ? '' : '로딩 중∙∙∙';

	const getList = () => {
		getIssues(page).then((data: any) => {
			setIssueList(data);
		});
	};

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

	useEffect(() => {
		!isLastIssue && getList();
	}, [page]);

	return { issueList, setTarget, loadingMessage };
}
