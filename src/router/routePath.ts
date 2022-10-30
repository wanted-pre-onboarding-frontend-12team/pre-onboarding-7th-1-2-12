type Pages = 'MAIN' | 'DETAIL' | 'ERROR';

type PATH = Record<Pages, string>;

const ROUTE_PATH: PATH = {
	MAIN: '/',
	DETAIL: '/detail',
	ERROR: '*',
};

export default ROUTE_PATH;
