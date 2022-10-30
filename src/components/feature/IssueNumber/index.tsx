import { NumberLayout } from './styled';

type Props = {
	issueNumber: number;
};
export default function IssueNumber({ issueNumber }: Props) {
	return <NumberLayout>#{issueNumber}</NumberLayout>;
}
