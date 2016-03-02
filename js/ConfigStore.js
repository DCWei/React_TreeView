import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import treeViewReducer from './TreeViewReducers';

const loggerMiddleware = createLogger();

export default function configureStore(initialState) {
	return createStore(
		combineReducers({treeViewReducer}),
		initialState,
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
		)
	);
};
