import React from 'react';
import TreeView from './TreeView';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './TreeViewActions';

class TestTreeView extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="testContainer">
				<TreeView />
			</div>
		);
	}
}

export default connect(
	state => state.treeViewReducer.toJS(),
	dispatch => ({
		actions: bindActionCreators(actions, dispatch)
	})
)(TestTreeView);
