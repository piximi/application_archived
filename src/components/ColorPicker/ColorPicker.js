import React from 'react';
import { CirclePicker } from 'react-color';
import { colors } from '../../constants';

const ColorPicker = props => {
  const { onChange, categories } = props;

  function usedColors(categories) {
    if (categories) {
      return categories.map(category => category.color.toUpperCase());
    } else {
      return [];
    }
  }

  function availableColors(categories) {
    return colors.filter(
      color => !usedColors(categories).includes(color.toUpperCase())
    );
  }

  return (
    <CirclePicker colors={availableColors(categories)} onChange={onChange} />
  );
};

export default ColorPicker;
