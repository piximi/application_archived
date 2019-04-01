import React from 'react';
import { CirclePicker } from 'react-color';
import { colors } from '../../constants';

export default function ColorPicker(props) {
  const { onChange, categories } = props;
  const usedColors = categories.map(category => category.color.toUpperCase());
  const availableColors = colors.filter(
    color => !usedColors.includes(color.toUpperCase())
  );
  return <CirclePicker colors={availableColors} onChange={onChange} />;
}
