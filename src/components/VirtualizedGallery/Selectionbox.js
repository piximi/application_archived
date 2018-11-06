import React, { Component } from 'react';
import './Gallery.css';
import { reCalc } from './helper';

class Selectionbox extends Component {
  constructor() {
    super();
    this.state = {
      style: {
        zIndex: 9000,
        position: 'fixed',
        background: '#eaeaea',
        opacity: 0.4,
        border: '0.1em solid',
        borderColor: '#AAAAAA'
      }
    };
  }

  static getDerivedStateFromProps(props, state) {
    const styleFromBoxCoordinates = reCalc(props.selectionboxCoordinates);
    let style = { ...state.style };
    style = {
      ...style,
      ...styleFromBoxCoordinates,
      visibility: props.visibility
    };
    return { style: style };
  }

  render() {
    return <div style={this.state.style} />;
  }
}

export default Selectionbox;
