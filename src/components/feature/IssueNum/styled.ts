import styled from 'styled-components';

export const NumberLayout = styled.p`
	font-size: ${(props) => props.theme.fontSizes.normal};
	color: #808080; //🐦color theme 수정 예정
	@media screen and (min-width: 1280px) {
		font-size: ${(props) => props.theme.fontSizes.large};
	}
`;
