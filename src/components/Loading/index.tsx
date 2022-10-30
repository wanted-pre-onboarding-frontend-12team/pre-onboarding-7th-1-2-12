import styled from 'styled-components';
import Spinner from '../../asset/Spinner.gif';
import { Load, LoadText } from './styled';
// import * as A from './styled';

export default function Loading() {
	return (
		<Load>
			<LoadText>로딩중 입니다~ 잠시만 기다려주세요!</LoadText>
			<img src={Spinner} alt="로딩중" width="10%" />
		</Load>
	);
}
