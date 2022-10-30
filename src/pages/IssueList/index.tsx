import * as S from './styled';
import useInfinityScroll from './useInfinityScroll';

export default function IssueList() {
	const { issueList, setTarget, loadingMessage } = useInfinityScroll();
	return (
		<S.IssueListWrap>
			{issueList?.map((item: any) => {
				return <S.IssuetItem key={item.id}>조회수: {item.comments}</S.IssuetItem>;
			})}

			<S.IssueBottom ref={setTarget}>{loadingMessage}</S.IssueBottom>
		</S.IssueListWrap>
	);
}
