import styled from 'styled-components';

export const IssueDetailWrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 100vw;
	.userInfo {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 1rem;
		gap: 7px;
		div {
			img {
				width: 5rem;
			}
		}
		@media ${({ theme }) => theme.device.laptop} {
			gap: 12px;
		}
		font-size: ${({ theme }) => theme.fontSizes.normal};
		@media ${({ theme }) => theme.device.laptop} {
			font-size: ${({ theme }) => theme.fontSizes.large};
		}
		.writeInfo {
			display: flex;
			flex-direction: column;
			padding-top: 1rem;
			div {
				display: flex;
				flex-direction: row;
			}
			p {
				margin-left: 1rem;
				margin-bottom: 1rem;
			}
		}
	}
	.issueInfo {
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
