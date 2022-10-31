type Pages = 'MAIN' | 'DETAIL' | 'ERROR';

type PATH = Record<Pages, string>;

const ROUTE_PATH: PATH = {
	MAIN: '/',
	DETAIL: '/detail/:issueNumber',
	ERROR: '*',
};

export default ROUTE_PATH;
