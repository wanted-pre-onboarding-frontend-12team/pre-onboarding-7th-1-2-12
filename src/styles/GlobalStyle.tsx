import * as styled from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = styled.createGlobalStyle`
	${reset}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	body {
		font-size: 16px;
		background-color: ${({ theme }) => theme.colors.lightgray};
	}
`;

export default GlobalStyle;
