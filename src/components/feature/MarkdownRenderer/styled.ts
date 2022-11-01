import styled from 'styled-components';

export const MarkdownStyle = styled.div`
	font-size: 1rem;
	line-height: 2.5rem;
`;

export const InlineCode = styled.span`
	background-color: red;
`;

export const Pre = styled.pre`
	margin: 2rem auto;
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.deepgray};
	line-height: 1.5rem;
`;

export const BlockQuote = styled.blockquote`
	padding: 1rem;
	border: 1px dashed ${({ theme }) => theme.colors.deepgray};
`;
