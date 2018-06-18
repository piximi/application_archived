import React, { Component } from 'react';
import './App.css';
import ConnectedClassifier from './containers/ConnectedClassifier';
import Application from './components/Application/Application';
import ConnectedApplication from './containers/ConnectedApplication';

class App extends Component {
  render() {
    return <ConnectedApplication />;
    // return <Application />;
    // return <ConnectedClassifier />;
  }
}

export default App;
