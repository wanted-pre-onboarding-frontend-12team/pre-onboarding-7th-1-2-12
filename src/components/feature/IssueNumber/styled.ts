import styled from 'styled-components';

export const NumberLayout = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.normal};
	color: ${({ theme }) => theme.colors.deepgray};
	@media ${({ theme }) => theme.device.laptop} {
		font-size: ${({ theme }) => theme.fontSizes.large};
	}
`;
