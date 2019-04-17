import * as React from 'react';
import { CirclePicker } from 'react-color';
import { colors } from '../../constants';

const ColorPicker = (props: { onChange: any; categories: any; }) => {
  const { onChange, categories } = props;

  const usedColors = (categories: any) => {
    if (categories) {
      return categories.map((category: any) => category.color.toUpperCase());
    } else {
      return [];
    }
  };

  const availableColors = (categories: any) => {
    return colors.filter(
      color => !usedColors(categories).includes(color.toUpperCase())
    );
  };

  return (
    <CirclePicker colors={availableColors(categories)} onChange={onChange} />
  );
};

export default ColorPicker;
