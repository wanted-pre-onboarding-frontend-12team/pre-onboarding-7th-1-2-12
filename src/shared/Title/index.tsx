import { CSSProperties } from 'styled-components';
import { TitleLayout } from './styled';

type Props = {
	children: React.ReactNode;
	style?: CSSProperties;
};

export default function Title({ children }: Props) {
	return <p>{children}</p>;
}
