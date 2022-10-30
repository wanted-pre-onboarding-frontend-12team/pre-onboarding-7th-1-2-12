import styled from 'styled-components';

export const IssueLayout = styled.section`
	display: flex;
	flex-direction: column;
	cursor: pointer;
	.title {
		display: flex;
		align-items: end;
	}
	gap: 7px;
	@media ${({ theme }) => theme.device.laptop} {
		gap: 12px;
	}
	font-size: ${({ theme }) => theme.fontSizes.normal};
	@media ${({ theme }) => theme.device.laptop} {
		font-size: ${({ theme }) => theme.fontSizes.large};
	}
	.IssueInfo {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

export const BorderLine = styled.div`
	height: 1px;
	background: #000000;
	margin: 10px 0;
	@media ${({ theme }) => theme.device.laptop} {
		margin: 20px 0;
	}
`;
