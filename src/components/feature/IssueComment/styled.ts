import styled from 'styled-components';

export const CommentLayout = styled.section`
	display: flex;
	gap: 7px;
	font-size: ${({ theme }) => theme.fontSizes.normal};
	@media ${({ theme }) => theme.device.laptop} {
		font-size: ${({ theme }) => theme.fontSizes.large};
	}
	.speechIcon {
		width: 20px;
		height: 20px;
		@media ${({ theme }) => theme.device.laptop} {
			width: 30px;
			height: 30px;
		}
	}
`;
