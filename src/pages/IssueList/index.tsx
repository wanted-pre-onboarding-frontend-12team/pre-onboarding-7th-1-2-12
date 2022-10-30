import { useContext } from 'react';
import Issue from '../../components/feature/Issue';
import { IssueContext } from '../../constants/IssueProvider';
import { MainLayout } from './styled';
import { AdsBanner } from '../../components';

export default function IssueList() {
	const { issueList, newUserList, setTarget, loadingMessage }: any = useContext(IssueContext);
	const isAdPositon = 4;

	return (
		<MainLayout>
			{issueList &&
				issueList.map((issueItem: any, index: number) => {
					return index === isAdPositon ? (
						<>
							<AdsBanner />
							<Issue key={index} issueItem={issueItem} userItem={newUserList[index]} />
						</>
					) : (
						<Issue key={index} issueItem={issueItem} userItem={newUserList[index]} />
					);
				})}
			<div ref={setTarget}>{loadingMessage}</div>
		</MainLayout>
	);
}
