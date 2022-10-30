import * as S from './styled';
import { Anchor } from '../../';

type Props = {
	href?: string;
	imgSrc?: string;
	target?: '_blank' | '_self' | '_parent' | '_top';
};

const DEFAULT_BANNER_LINK = 'https://www.wanted.co.kr/';
const DEFAULT_BANNER_IMAGE_SRC = 'https://theme.zdassets.com/theme_assets/9309779/4f2fb72a20c8e2ee37a305ef38ef1d144774a8df.png';

export default function AdsBanner(props: Props) {
	return (
		<Anchor href={props.href ?? DEFAULT_BANNER_LINK} target={props.target ?? '_blank'}>
			<S.AdsBannerContainer>
				<S.AdsBannerImage src={props.imgSrc ?? DEFAULT_BANNER_IMAGE_SRC} />
			</S.AdsBannerContainer>
		</Anchor>
	);
}
