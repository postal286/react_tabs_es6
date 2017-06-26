import React, { Component } from 'react';
import './App.css';

import Tabs from './components/tabs-component/tabs';
import TabsV2 from './components/tabs-component-v2/tabs';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs />
        <TabsV2/>
      </div>
    );
  }
}
