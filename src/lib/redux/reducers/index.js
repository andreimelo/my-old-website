import { combineReducers } from 'redux';
import Modals from './Modals';

const getReducers = () => {
	return combineReducers({
		Modals,
	});
};

export default getReducers;
