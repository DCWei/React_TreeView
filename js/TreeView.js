import React, {PropTypes} from 'react';
import {classNames} from 'classnames';

class TreeView extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<ul>
				<li>
					<div className="tree-node">
						<div className="non-leaf"></div>
						root node
					</div>
					<div className="node-children">
						<ul>
							<li>
								<div className="tree-node">
									<div className="leaf"></div>
									child 1
								</div>
							</li>
							<li>
								<div className="tree-node">
									<div className="leaf"></div>
									child 2
								</div>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		);
	}
}

export default TreeView
