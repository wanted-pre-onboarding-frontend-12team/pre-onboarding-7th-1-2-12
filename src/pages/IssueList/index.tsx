import { useContext } from 'react';
import Issue from '../../components/feature/Issue';
import { IssueContext } from '../../constants/IssueProvider';
import { MainLayout } from './styled';

export default function IssueList() {
	const { issueList, newUserList }: any = useContext(IssueContext);

	return (
		<MainLayout>
			{issueList &&
				issueList.map((issueItem: any, index: number) => {
					return <Issue key={index} issueItem={issueItem} userItem={newUserList[index]} />;
				})}
		</MainLayout>
	);
}
