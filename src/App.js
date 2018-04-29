import React, { Component } from 'react';
import './App.css';
import Classifier from './components/Classifier';
import data from './images/small-mnist.json';

class App extends Component {
  render() {
    return (
      <Classifier
        categories={data.categories}
        images={data.images}
        settings={data.settings}
      />
    );
  }
}

export default App;
