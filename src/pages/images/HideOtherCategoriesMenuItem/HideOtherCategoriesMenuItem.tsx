import * as React from 'react';
import * as MaterialUI from '@material-ui/core';
import { Classifier, Image, Category } from '@piximi/types';

type HideOtherCategoriesProps = {
  classifier: Classifier;
  category: Category;
  closeMenu: () => void;
  makeImageInvisible: (imageIdentifier: string) => void;
};

const HideOtherCategoriesMenuItem = (props: HideOtherCategoriesProps) => {
  const { classifier, category, closeMenu, makeImageInvisible } = props;

  const onClick = () => {
    closeMenu();
    classifier.images.forEach((image: Image) => {
      if (image.categoryIdentifier === category.identifier) {
        makeImageInvisible(image.identifier);
      }
    });
  };

  return (
    <MaterialUI.MenuItem onClick={onClick}>
      <MaterialUI.ListItemText primary="Hide other categories" />
    </MaterialUI.MenuItem>
  );
};

export default HideOtherCategoriesMenuItem;
