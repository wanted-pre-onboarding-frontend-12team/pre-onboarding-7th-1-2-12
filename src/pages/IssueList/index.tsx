import { useContext } from 'react';
import Issue from '../../components/feature/Issue';
import { IssueContext } from '../../constants/IssueProvider';

export default function IssueList() {
	const { issueList, newUserList }: any = useContext(IssueContext);

	return (
		<>
			{issueList &&
				issueList.map((issueItem: any, index: number) => {
					return <Issue key={issueItem.id} issueItem={issueItem} userItem={newUserList[index]} />;
				})}
		</>
	);
}
