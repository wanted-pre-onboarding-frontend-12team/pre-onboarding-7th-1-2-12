import styled from 'styled-components';

export const WriterLayout = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.normal};
	@media ${({ theme }) => theme.device.laptop} {
		font-size: ${({ theme }) => theme.fontSizes.large};
	}
`;
