import * as S from './styled';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

type Props = {
	markdown: string;
};

export default function MarkdownRenderer(props: Props) {
	const filterMarkdown = (markdown: string) =>
		markdown
			.replace(/\n\s\n\s/gi, '\n\n&nbsp;\n\n')
			.replace(/\*\*/gi, '@$_%!^')
			.replace(/\**\*/gi, '/')
			.replace(/@\$_%!\^/gi, '**')
			.replace(/<\/?u>/gi, '*');

	return (
		<S.MarkdownStyle>
			<ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
				{filterMarkdown(props.markdown)}
			</ReactMarkdown>
		</S.MarkdownStyle>
	);
}
