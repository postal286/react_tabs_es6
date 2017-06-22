import React, { Component } from 'react';
const _ = require('lodash');

const dataTabs = [
  {
    title: 'London',
    text: 'London has been my adopted home for nearly 15 years and I still marvel at its energy and diversity. Living here is a constant discovery: new restaurants and bars, outstanding museum extensions or refurbishments (and yet many remain free), once-derelict but now trendy neighbourhoods, and four distinct seasons that each brings unique pleasures. The spectre of Brexit may be looming over the citys famed cultural...',
    tabId: '0',
  },
  {
    title: 'Moscow',
    text: 'Moscow is a major political, economic, cultural, and scientific centre of Russia and Eastern Europe, as well as the largest city entirely on the European continent. By broader definitions Moscow is among the worlds largest cities, being the 14th largest metro area, the 18th largest agglomeration, the 15th largest urban area, and the 11th largest by population within city limits worldwide. According to Forbes 2013,[12] Moscow has been ranked as the ninth most expensive city in the world by Mercer and has one of the worlds largest urban economies, being ranked as an alpha global city according to the Globalization and World Cities Research Network, and is also one of the fastest growing tourist destinations in the world according to the MasterCard Global Destination Cities Index.',
    tabId: '1',
  },
  {
    title: 'Paris',
    text: 'Paris’ grandeur is inspiring but what I love most about the city is its intimacy. Its quartiers (quarters) are like a patchwork of villages, and while it’s one of the world’s major metropolises – with all of the culture and facilities that go with it – there’s a real sense of community at the local shops, markets and cafes that hasn’t changed since my childhood. Yet because every little ‘village’ has its own evolving...',
    tabId: '2',
  },
] || [];

class TabAnchor extends Component {
  constructor(props) {
    super(props);

    this.onTabClick = this.onTabClick.bind(this);

    this.state = {
      active: this.props.classNull
    };
  }


  onTabClick() {

    this.props.onTabClick(this.props.item.title, this.props.item.text);

    this.props.resetClasses();

    this.setState({
      active: ' tabs__tab__li_a_active'
    });

  }

  render() {
    let title = this.props.item.title;

    return (
      <a className={this.props.className + this.state.active} onClick={this.onTabClick}>
        {title}
      </a>
    );
  }
}

class Tab extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      classNull: ''
    };

    this.resetClasses = this.resetClasses.bind(this);
  }

  resetClasses() {

    this.setState({
      classNull: ''
    });

    this.forceUpdate();
  }

  render() {
    let data = this.props.data,
        dataTemplate;

    if (data.length > 0) {
      dataTemplate = _.map(data, (item, index) => {
          return (
            <li key={item.tabId} className="tabs__tab__li">
              <TabAnchor
                item={item}
                className={'tab-' + index}
                onTabClick={this.props.changeTabContent}
                resetClasses={this.resetClasses}
                classNull={this.state.classNull}
              />
            </li>
          );
        }
      );
    } else {
      dataTemplate = 'Извините, но ничего пока нет.';
    }

    return (
      <ul className="tabs__tab">
        {dataTemplate}
      </ul>
    );
  }
}

class Content extends Component {
  render() {
    let title = this.props.title,
        text = this.props.text;

    return (
      <div className="tab_content">
        <h3 className="tab_content__city_title">{title}</h3>
        <p className="tab_content__city_description">{text}</p>
      </div>
    );
  }
}

export default class Tabs extends Component {
  constructor(props) {
    super(props);

    this.changeTabContent = this.changeTabContent.bind(this);

    this.state = {
      data: dataTabs,
      title: dataTabs[0].title,
      text: dataTabs[0].text,
    };
  }

  changeTabContent(newTitle, newText) {
    this.setState(() => ({
      title: newTitle,
      text: newText,
    }));
  }

  render() {
    let data = this.state.data,
        title = this.state.title,
        text = this.state.text;

    return (
      <div className="tabs">
        <Tab data={data} changeTabContent={this.changeTabContent} />
        <Content title={title} text={text} />
      </div>
    );
  }
}
