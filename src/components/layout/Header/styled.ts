import styled from 'styled-components';

export const HeaderWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 60px;
		padding: 1rem 0;
		width: 100vw;
		background-color: #383535;
		color: white;
		span {
			margin-top: 1rem;
		}
	}
	@media ${(props) => props.theme.device.laptop} {
		color: green;
		div {
			align-items: center;
			span {
				font-size: 1.2rem;
			}
		}
	}
`;
