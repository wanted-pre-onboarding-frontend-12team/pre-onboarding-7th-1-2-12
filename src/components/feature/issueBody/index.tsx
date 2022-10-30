import ReactMarkdown from 'react-markdown';
import { MarkDownStyle } from './styled';

const content = `### OS?\r\nAny, mostly a build/CI question\r\n\r\n### Versions.\r\n1.0.0-beta.26\r\n\r\n### Reasoning\r\nI really like the environment variables setup with the CLI and we have switched to using them. One problem though is we no longer have access to server set ENV variables which is how we pass information to certain things during deployment.`;

export default function IssueBody() {
	return (
		<MarkDownStyle>
			<ReactMarkdown>{content}</ReactMarkdown>
		</MarkDownStyle>
	);
}
