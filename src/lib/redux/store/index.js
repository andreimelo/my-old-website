import { createStore, applyMiddleware } from 'redux';
import getReducers from '../reducers';
import thunkMiddleWare from 'redux-thunk';

const composeEnhancers = window.devToolsExtension || compose;

export function initStore(initialState){
	let store = createStore(
		getReducers(),
		initialState,
		applyMiddleware(thunkMiddleWare),
	);
	return store;
}
