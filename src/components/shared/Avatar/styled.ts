import styled from 'styled-components';

type AvatarProps = {
	borderRadius?: string;
};

export const AvatarContainer = styled.div`
	display: flex;
`;

export const AvatarImage = styled.img<AvatarProps>`
	border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
`;
