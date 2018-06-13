import React, { Component } from 'react';
import './App.css';
import ConnectedClassifier from './containers/ConnectedClassifier';
import Application from './components/Application/Application';

class App extends Component {
  render() {
    return <Application />;
    // return <ConnectedClassifier />;
  }
}

export default App;
