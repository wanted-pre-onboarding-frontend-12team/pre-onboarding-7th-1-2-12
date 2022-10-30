import { NumberLayout } from './styled';

type Props = {
	issueNumber: number;
};
export default function IssueNum({ issueNumber }: Props) {
	return <NumberLayout>#{issueNumber}</NumberLayout>;
}
