import DateFormat from '../../../utils/dateFormat';
import { TimeLayout } from './styled';

type Prop = {
	writeTime: string;
};

export default function IssueTime({ writeTime }: Prop) {
	return <TimeLayout>{DateFormat({ writeTime })}에 열림</TimeLayout>;
}
