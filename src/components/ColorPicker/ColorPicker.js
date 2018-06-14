import { withStyles } from 'material-ui';
import React, { Component } from 'react';
import styles from './ColorPicker.css';
import { CirclePicker } from 'react-color';

class ColorPicker extends Component {
  render() {
    return <CirclePicker />;
  }
}

export default withStyles(styles, { withTheme: true })(ColorPicker);
