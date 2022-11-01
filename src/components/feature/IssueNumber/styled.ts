import styled from 'styled-components';

export const NumberLayout = styled.span`
	font-size: ${({ theme }) => theme.fontSizes.normal};
	padding-left: 7px;
	color: ${({ theme }) => theme.colors.gray};
	@media ${({ theme }) => theme.device.laptop} {
		font-size: ${({ theme }) => theme.fontSizes.large};
		padding-left: 10px;
	}
`;
