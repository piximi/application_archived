import * as React from 'react';
import * as MaterialUI from '@material-ui/core';
import { Classifier, Category } from '@piximi/types';

type HideOtherCategoriesProps = {
  classifier: Classifier;
  categoryProp: Category;
  closeMenu: () => void;
  makeCategoryInvisible: (
    categoryIdentifier: string,
    visibility: boolean
  ) => void;
};

const HideOtherCategoriesMenuItem = (props: HideOtherCategoriesProps) => {
  const { classifier, categoryProp, closeMenu, makeCategoryInvisible } = props;

  // check if 'categoryProp' is the only visible category
  const isOnlyVisibleCategory =
    classifier.categories
      .filter(
        (category: Category) => category.identifier !== categoryProp.identifier
      )
      .filter((category: Category) => category.visualization.visible).length ===
    0;

  const listItemText = isOnlyVisibleCategory
    ? 'Show other categories'
    : 'Hide other categories';

  const onClick = () => {
    closeMenu();
    classifier.categories.forEach((category: Category) => {
      if (category.identifier !== categoryProp.identifier) {
        makeCategoryInvisible(category.identifier, isOnlyVisibleCategory);
      }
    });
  };

  return (
    <MaterialUI.MenuItem onClick={onClick}>
      <MaterialUI.ListItemText primary={listItemText} />
    </MaterialUI.MenuItem>
  );
};

export default HideOtherCategoriesMenuItem;
