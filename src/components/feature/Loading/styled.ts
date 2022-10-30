import styled from 'styled-components';

export const Load = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	background: #ffffffb7;
	z-index: 999;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
export const LoadText = styled.div`
	padding: 15px;
	text-align: center;
	font-weight: bold;
	@media screen and (max-width: 768px) {
		font-size: 11px;
	}
`;
