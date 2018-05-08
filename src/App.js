import React, { Component } from 'react';
import './App.css';
import ConnectedClassifier from './containers/ConnectedClassifier';
import data from './images/mnist.json';

class App extends Component {
  render() {
    return (
      <ConnectedClassifier
        categories={data.categories}
        images={data.images}
        settings={data.settings}
      />
    );
  }
}

export default App;
