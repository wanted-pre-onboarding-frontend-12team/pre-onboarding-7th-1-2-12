import styled from 'styled-components';

export const TimeLayout = styled.p`
	color: #808080;
	font-size: ${(props) => props.theme.fontSizes.normal};
	@media screen and (min-width: 1280px) {
		font-size: ${(props) => props.theme.fontSizes.large};
	}
`;
