import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import styles from './ColorPicker.css';
import { CirclePicker } from 'react-color';
import { colors } from '../../constants';

function ColorPicker(props) {
  const { onChange, categories } = props;
  const usedColors = categories.map(category => category.color.toUpperCase());
  const availableColors = colors.filter(
    color => !usedColors.includes(color.toUpperCase())
  );
  return <CirclePicker colors={availableColors} onChange={onChange} />;
}

export default withStyles(styles, { withTheme: true })(ColorPicker);
