import { withStyles } from '@material-ui/core/styles';
import React, { PureComponent } from 'react';
import styles from './ColorPicker.css';
import { CirclePicker } from 'react-color';
import { colors } from '../../constants';

class ColorPicker extends PureComponent {
  render() {
    const { onChange, categories } = this.props;
    const usedColors = categories.map(category => category.color.toUpperCase());
    const availableColors = colors.filter(color => !usedColors.includes(color));
    return <CirclePicker colors={availableColors} onChange={onChange} />;
  }
}

export default withStyles(styles, { withTheme: true })(ColorPicker);
