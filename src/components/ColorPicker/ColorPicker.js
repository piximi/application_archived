import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import styles from './ColorPicker.css';
import { CirclePicker } from 'react-color';

class ColorPicker extends Component {
  render() {
    const { onChange, colors } = this.props;
    var defaultColors = [
      '#ff0000',
      '#f44336',
      '#e91e63',
      '#9c27b0',
      '#673ab7',
      '#3f51b5',
      '#2196f3',
      '#03a9f4',
      '#00bcd4',
      '#009688',
      '#4caf50',
      '#8bc34a',
      '#cddc39',
      '#ffeb3b',
      '#ffc107',
      '#ff9800',
      '#ff5722',
      '#795548',
      '#607d8b'
    ];
    var unUsedColors = colors.map(color => color.toLowerCase());
    unUsedColors = defaultColors.filter(function(x) {
      return unUsedColors.indexOf(x) < 0;
    });
    //debugger;
    return <CirclePicker colors={unUsedColors} onChange={onChange} />;
  }
}

export default withStyles(styles, { withTheme: true })(ColorPicker);
