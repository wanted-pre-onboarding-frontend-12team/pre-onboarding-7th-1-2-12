import styled from 'styled-components';

export const TimeLayout = styled.p`
	color: ${({ theme }) => theme.colors.gray};
	font-size: ${({ theme }) => theme.fontSizes.normal};
	@media ${({ theme }) => theme.device.laptop} {
		font-size: ${({ theme }) => theme.fontSizes.large};
	}
`;
