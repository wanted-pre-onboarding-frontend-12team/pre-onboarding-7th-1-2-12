import { useContext } from 'react';
import { StatusStateContext, StatusDispatchContext } from './StatusProvider';

export function useStatusState() {
	const state = useContext(StatusStateContext);
	if (!state) {
		throw new Error('failed');
	}
	return state;
}

export function useStatusDispatch() {
	const dispatch = useContext(StatusDispatchContext);
	if (!dispatch) {
		throw new Error('failed');
	}
	return dispatch;
}
