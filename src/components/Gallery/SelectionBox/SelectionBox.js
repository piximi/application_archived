import React, { PureComponent } from 'react';
import '../Gallery/Gallery.css';
import { reCalc } from '../helper';

class SelectionBox extends PureComponent {
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
    const styleFromBoxCoordinates = reCalc(props.selectionBoxCoordinates);
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

export default SelectionBox;
