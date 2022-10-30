import { Avatar, IssueComment, IssueNumber, IssueTime, IssueWriter } from '../../components';
import { BorderLine } from '../../components/feature/Issue/styled';
import Title from '../../shared/Title';
import { DetailLayout } from './styled';

export default function IssueDetail() {
	const html_url = 'https://github.com/youngminss/';
	const avartar_url = 'https://avatars.githubusercontent.com/u/50790145?v=4';
	const writerName = 'writerName';
	const issueTime = '2022-10-28T19:15:35Z';
	const issueNumber = 112233;
	return (
		<DetailLayout>
			<Avatar href={html_url} imgSrc={avartar_url} borderRadius="50%" />
			<IssueWriter writerName={writerName} />
			<IssueTime writeTime={issueTime} />
			<Title>css 적용이 안되는 문제.......</Title>
			<IssueNumber issueNumber={issueNumber} />
			<IssueComment commentCount={121} />
			<BorderLine />
			{/* <IssueBody/> */}
		</DetailLayout>
	);
}
