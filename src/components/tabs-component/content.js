import React, { PureComponent } from 'react';

export default class Content extends PureComponent {

  render() {

    let { title, text } = this.props;

    return (
      <div className="tab_content">
        <h3 className="tab_content__city_title">{title}</h3>
        <p className="tab_content__city_description">{text}</p>
      </div>
    );
  }
}