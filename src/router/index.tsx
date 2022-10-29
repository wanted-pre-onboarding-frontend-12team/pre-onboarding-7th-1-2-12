import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ROUTE_PATH from './routePath';
import Title from '../shared/title';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={ROUTE_PATH.MAIN} element={<Title />} />
				<Route path={ROUTE_PATH.DETAIL} element={<div>상세 페이지</div>} />
				<Route path={ROUTE_PATH.ERROR} element={<div>에러 페이지</div>} />
			</Routes>
		</BrowserRouter>
	);
}
