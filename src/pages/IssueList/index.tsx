import { useEffect, useState, useRef } from 'react';
import * as S from './styled';
import { getIssues } from '../../apis/Issue';

export default function IssueList() {
	return <S.IssueListWrap />;
}
// const [issueList, setIssueList] = useState([]);
// const [target, setTarget] = useState('');
// const [page, setPage] = useState(8);

// // useEffect(() => {
// // 	let observer: any;
// // 	if (target) {
// // 		observer = new IntersectionObserver(onIntersect, { threshold: 1 });
// // 		observer.observe(target);
// // 	}
// // 	return () => observer?.disconnect();
// // }, [target]);

// // const onIntersect = ([entry]: any) => {
// // 	if (entry.isIntersecting) {
// // 		console.log('끝이야!');
// // 	}
// // };
// const getList = () => {
// 	getIssues(page).then((data: any) => {
// 		setIssueList(data);
// 	});
// };
// useEffect(() => {
// 	getList();
// }, []);
// console.log(issueList);

// return (
// 	<S.IssueListWrap>
// 		{issueList?.map((item: any) => {
// 			return <S.IssuetItem key={item.id}>조회수: {item.comments}</S.IssuetItem>;
// 		})}

// 		<S.IssueBottom ref={setTarget}>로딩 중...</S.IssueBottom>
// 	</S.IssueListWrap>
// );
