import React, { Component } from 'react';

export default class Tabs extends Component {

	constructor(props) {
		super(props);

		this.state = {
			selected: this.props.selected
		};
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.props !== nextProps || this.state !== nextState;
	}

	handleClick = (index, event) => {
		event.preventDefault();
		this.setState({
			selected: index
		});
	}

	_renderTitles() {
		function labels(child, index) {
			let activeClass = (this.state.selected === index ? 'tabs__tab__li_a_active' : '');
			return (
				<li key={index} className="tabs__tab__li">
					<a
						 className={`${activeClass}`}
						 onClick={this.handleClick.bind(this, index)}>
						{child.props.label}
					</a>
				</li>
			);
		}

		return (
			<ul className="tabs__tab">
				{this.props.children.map(labels.bind(this))}
			</ul>
		);
	}

	_renderContent () {
		return (
			<div className="tab_content">
				{this.props.children[this.state.selected]}
			</div>
		);
	}

	render () {
		return (
			<div className="tabs">
				{this._renderTitles()}
				{this._renderContent()}
			</div>
		);
	}
};

Tabs.defaultProps = {
	selected: 0
};
