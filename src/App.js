import React, { Component } from 'react';
import './App.css';

import Tabs from './components/tabs-component/tabs';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs />
      </div>
    );
  }
}
