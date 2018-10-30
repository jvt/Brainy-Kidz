import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import reduceReducers from 'reduce-reducers';

import system from './system';
import programs from './programs';
import students from './students';
import teacher from './teacher';

export default reduceReducers(
	combineReducers({
		system,
		programs,
		students,
		teacher,
	})
);
