import styled from 'styled-components';

export const AdsBannerContainer = styled.div`
	display: flex;
	width: 100%;
	margin-bottom: 30px;
	background-color: ${({ theme }) => theme.colors.white};
`;

export const AdsBannerImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;
