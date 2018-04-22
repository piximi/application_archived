import React, { Component } from 'react';
import './App.css';
import Classifier from './components/Classifier';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContextProvider } from 'react-dnd';

class App extends Component {
  render() {
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <Classifier />
      </DragDropContextProvider>
    );
  }
}

export default App;
