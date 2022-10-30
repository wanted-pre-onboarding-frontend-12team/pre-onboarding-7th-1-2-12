import Spinner from '../../asset/Spinner.gif';
import * as S from './styled';

export default function Loading() {
	return (
		<S.Load>
			<S.LoadText>로딩중 입니다~ 잠시만 기다려주세요!</S.LoadText>
			<img src={Spinner} alt="로딩중" width="10%" />
		</S.Load>
	);
}
