import Avartar from '../../shared/Avatar';
import CommonTitle from '../../../shared/Title';
import { IssueWriter, IssueNumber, IssueTime, IssueComment } from '../../';
import { BorderLine, IssueDetailWrapper } from './styled';

export type IssueItem = {
	number: number;
	title: string;
	created_at: string;
	comments: number;
	login: string;
	body: string;
	user?: UserItem;
};

export type UserItem = {
	login: string;
	avatar_url: string;
};

export default function IssueHeader(props: IssueItem) {
	return (
		<IssueDetailWrapper>
			<div className="userInfo">
				<Avartar imgSrc={props.avatar_url} />
				<div className="writeInfo">
					<IssueWriter writerName={props.login} />
					<IssueTime writeTime={props.created_at} />
				</div>
			</div>
			<div className="issueInfo">
				<div>
					<CommonTitle style={{ fontSize: '1.5rem' }}>{props.title}</CommonTitle>
					<IssueNumber issueNumber={props.number} />
				</div>
				<IssueComment commentCount={props.comments} />
			</div>
			<BorderLine />
		</IssueDetailWrapper>
	);
}
