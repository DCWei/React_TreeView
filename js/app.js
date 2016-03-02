import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import configureStore from "./ConfigStore";
import TestTreeView from './TestTreeView';

const store = configureStore();

ReactDOM.render(
	(<Provider store={store}>
		<TestTreeView />
	</Provider>),
	document.getElementById('container')
);
