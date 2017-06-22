import React, { Component } from 'react';

export default class TabAnchor extends Component {

  onTabClick = () => {
    this.props.onTabClick(this.props.index)
  }

  render() {
    let title = this.props.item.title;

    let active = '';

    if (this.props.active) {
      active = 'tabs__tab__li_a_active';
    }

    return (
      <a
        className={`${this.props.className} ${active}`}
        onClick={this.onTabClick}
        >
        {title}
      </a>
    );
  }
}
