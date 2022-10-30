import styled from 'styled-components';

export const WriterLayout = styled.p`
	font-size: ${(props) => props.theme.fontSizes.normal};
	@media screen and (min-width: 1280px) {
		font-size: ${(props) => props.theme.fontSizes.large};
	}
`;
