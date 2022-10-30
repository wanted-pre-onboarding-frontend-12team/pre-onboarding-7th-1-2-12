import { WriterLayout } from './styled';

type Prop = {
	writerName: string;
};

export default function IssueWriter({ writerName }: Prop) {
	return <WriterLayout>{writerName}</WriterLayout>;
}
