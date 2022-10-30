import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Avatar } from '../components';
import { checkArray } from '../utils/checkArray';
import ROUTE_PATH from './routePath';

export default function Router() {
	const routeList = [
		{
			id: 1,
			path: ROUTE_PATH.MAIN,
			element: <div>메인 페이지</div>,
		},
		{
			id: 2,
			path: ROUTE_PATH.DETAIL,
			element: (
				<Div>
					<Avatar
						href="https://github.com/youngminss/"
						imgSrc="https://avatars.githubusercontent.com/u/50790145?v=4"
						borderRadius="50%"
					/>
				</Div>
			),
		},
		{
			id: 3,
			path: ROUTE_PATH.ERROR,
			element: <div>에러 페이지</div>,
		},
	];

	return (
		<BrowserRouter>
			<Routes>
				{checkArray(routeList) &&
					routeList.map(({ id, path, element }) => {
						return <Route key={id} path={path} element={element} />;
					})}
			</Routes>
		</BrowserRouter>
	);
}

const Div = styled.div`
	height: 80px;
`;
