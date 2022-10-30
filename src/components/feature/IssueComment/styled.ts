import styled from 'styled-components';

export const CommentLayout = styled.section`
	display: flex;
	gap: 7px;
	font-size: ${(props) => props.theme.fontSizes.normal};
	@media screen and (min-width: 1280px) {
		font-size: ${(props) => props.theme.fontSizes.large};
	}
	.speechIcon {
		width: 20px;
		height: 20px;
		@media screen and (min-width: 1280px) {
			width: 30px;
			height: 30px;
		}
	}
`;
