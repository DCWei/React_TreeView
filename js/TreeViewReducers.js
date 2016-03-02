import {actionType} from './constant/actionType';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({});

export default function treeViewReducer(state=initialState, action= {}) {
	switch(action.type) {
		default:
			return state;
	}
}
