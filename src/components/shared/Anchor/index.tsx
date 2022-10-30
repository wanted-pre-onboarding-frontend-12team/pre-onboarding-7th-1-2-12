import * as S from './styled';
import { PropsWithChildren } from 'react';

type Props = {
	href?: string;
	target: '_blank' | '_self' | '_parent' | '_top';
} & PropsWithChildren;

export default function Anchor({ children, ...props }: Props) {
	return <S.Anchor {...props}>{children}</S.Anchor>;
}
