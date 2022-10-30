import { TimeLayout } from './styled';

type Prop = {
	writeTime: string;
};
export default function IssueTime({ writeTime }: Prop) {
	return <TimeLayout>{writeTime}에 열림</TimeLayout>;
}
