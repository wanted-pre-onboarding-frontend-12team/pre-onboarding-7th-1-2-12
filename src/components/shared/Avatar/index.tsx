import * as S from './styled';
import Anchor from '../Anchor';

type Props = {
	imgSrc?: string;
	href?: string;
	borderRadius?: string;
};

export default function Avartar(props: Props) {
	return (
		<Anchor href={props.href} target="_blank">
			<S.AvatarContainer>
				<S.AvatarImage src={props.imgSrc ?? '/logo.png'} alt="프로필" borderRadius={props.borderRadius} />
			</S.AvatarContainer>
		</Anchor>
	);
}
