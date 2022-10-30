import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Avatar, AdsBanner } from '../components';
import { checkArray } from '../utils/checkArray';
import ROUTE_PATH from './routePath';
import Error from '../pages/Error';
import IssueList from '../pages/IssueList';
import IssueDetail from '../pages/IssueDetail';

export default function Router() {
	const routeList = [
		{
			id: 1,
			path: ROUTE_PATH.MAIN,
			element: <IssueList />,
		},
		{
			id: 2,
			path: ROUTE_PATH.DETAIL,
			element: <IssueDetail />,
		},
		{
			id: 3,
			path: ROUTE_PATH.ERROR,
			element: <Error />,
		},
	];

	return (
		<Routes>
			{checkArray(routeList) &&
				routeList.map(({ id, path, element }) => {
					return <Route key={id} path={path} element={element} />;
				})}
		</Routes>
	);
}

const Div = styled.div`
	height: 80px;
`;
