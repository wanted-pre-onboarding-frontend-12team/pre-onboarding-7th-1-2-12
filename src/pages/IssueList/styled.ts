import styled from 'styled-components';

export const MainLayout = styled.section`
	margin-top: 130px;
	padding: 0 16px;
	@media ${(props) => props.theme.device.laptop} {
		padding: 0 32px;
	}
`;
