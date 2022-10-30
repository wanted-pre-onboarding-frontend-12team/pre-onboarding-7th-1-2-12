import { useEffect, useState, useRef } from 'react';
import * as S from './styled';

export default function IssueDetail() {
	const [issueList, setIssueList] = useState([]);
	const [target, setTarget] = useState('');
	const [page, setPage] = useState(0);
	const defaultPage = 8;
	const isLastPage = issueList.length < page - defaultPage;

	const onIntersect = ([entry]: any) => {
		console.log(page);
		if (entry.isIntersecting) {
			if (!isLastPage) {
				setPage((prev) => prev + defaultPage);
			} else {
				console.log('끝이야!');
			}
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
		fetch(`https://api.github.com/repos/angular/angular-cli/issues?sort=comments&page=1&per_page=${page}`, {
			method: 'GET',
		})
			.then((res) => res.json())
			.then((data) => {
				setIssueList(data);
			});
	}, [page]);

	return (
		<S.IssueListWrap>
			{issueList?.map((item: any) => {
				return <S.IssuetItem key={item.id}>조회수: {item.comments}</S.IssuetItem>;
			})}

			<S.IssueBottom ref={setTarget}>{isLastPage ? '' : '로딩 중...'}</S.IssueBottom>
		</S.IssueListWrap>
	);
}
