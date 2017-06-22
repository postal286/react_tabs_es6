import React, { Component } from 'react';
import _ from 'lodash';

import TabAnchor from './tab-anchor';

export default class Tab extends Component {

  render() {
    let data = this.props.data,
        dataTemplate;

    if (data.length > 0) {
      dataTemplate = _.map(data, (item, index) => {
          return (
            <li key={item.tabId} className="tabs__tab__li">
              <TabAnchor
                item={item}
                index={item.tabId}
                className={'tab-' + index}
                onTabClick={this.props.changeTabContent}
                active={item.tabId === data.index}
              />
            </li>
          );
        }
      );
    } else {
      dataTemplate = 'Извините, но пока ничего нет.';
    }

    return (
      <ul className="tabs__tab">
        {dataTemplate}
      </ul>
    );
  }
}
