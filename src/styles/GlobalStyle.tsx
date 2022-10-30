import * as styled from 'styled-components';

const GlobalStyle = styled.createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	body {
		font-size: 16px;
		line-height: 1;
		background-color: ${({ theme }) => theme.colors.lightgray};
	}

	HTML5 display-role reset for older browsers article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	menu,
	nav,
	section {
		display: block;
	}

	blockquote,
	q {
		quotes: none;
	}

	blockquote:before,
	blockquote:after,
	q:before,
	q:after {
		content: '';
		content: none;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
`;

export default GlobalStyle;
