import { CSSProperties } from 'styled-components';
import { TitleLayout } from './styled';

type Props = {
	children: React.ReactNode;
};

export default function Title({ children }: Props) {
	return <TitleLayout>{children}</TitleLayout>;
}
