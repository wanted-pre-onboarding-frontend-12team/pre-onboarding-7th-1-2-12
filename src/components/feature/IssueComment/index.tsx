import CommentIcon from './speech-bubble.svg';
import { CommentLayout } from './styled';

type Prop = {
	commentCount: number;
};

export default function IssueComment({ commentCount }: Prop) {
	return (
		<CommentLayout>
			<img className={'speechIcon'} src={CommentIcon} />
			<p>{commentCount}</p>
		</CommentLayout>
	);
}
