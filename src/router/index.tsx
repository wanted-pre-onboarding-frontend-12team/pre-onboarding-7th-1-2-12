import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { checkArray } from '../utils/checkArray';

import ROUTE_PATH from './routePath';

export default function Router() {
	const routeList = [
		{
			path: ROUTE_PATH.MAIN,
			element: <div>메인 페이지</div>,
		},
		{
			path: ROUTE_PATH.DETAIL,
			element: <div>상세 페이지</div>,
		},
		{
			path: ROUTE_PATH.ERROR,
			element: <div>에러 페이지</div>,
		},
	];

	return (
		<BrowserRouter>
			<Routes>
				{checkArray(routeList) &&
					routeList.map(({ path, element }) => {
						return <Route path={path} element={element} />;
					})}
			</Routes>
		</BrowserRouter>
	);
}
