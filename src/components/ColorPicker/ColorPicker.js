import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import styles from './ColorPicker.css';
import { CirclePicker } from 'react-color';

class ColorPicker extends Component {
  render() {
    const { onChange } = this.props;

    return <CirclePicker onChange={onChange} />;
  }
}

export default withStyles(styles, { withTheme: true })(ColorPicker);
