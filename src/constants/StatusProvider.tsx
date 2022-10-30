import { createContext, useReducer } from 'react';

type Action = { type: 'STATUS_LOADING' } | { type: 'STATUS_ERROR' } | { type: 'STATUS_END' } | { type: null };
type State = {
	loading: boolean | undefined;
	error: boolean | undefined;
};
const initialState = {
	status: { loading: false, error: false },
};

function statusReducer(state: { loading: State; error: State }, action: Action): any {
	switch (action.type) {
		case 'STATUS_LOADING':
			return {
				...state,
				status: { loading: true, error: false },
			};
		case 'STATUS_END':
			return {
				...state,
				status: { loading: false, error: false },
			};
		case 'STATUS_ERROR':
			return {
				...state,
				status: { loading: false, error: true },
			};
		default:
			return state;
	}
}

export const StatusStateContext: any = createContext(null);
export const StatusDispatchContext: React.Context<any> = createContext(null);

export default function StatusProvider({ children }: any) {
	const [state, dispatch] = useReducer(statusReducer, initialState);
	return (
		<StatusStateContext.Provider value={state}>
			<StatusDispatchContext.Provider value={dispatch}>{children}</StatusDispatchContext.Provider>
		</StatusStateContext.Provider>
	);
}
