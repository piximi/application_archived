import * as React from 'react';
import {
  ListItemIcon,
  ListItemText,
  MenuList,
  MenuItem,
  Paper,
  Popover
} from '@material-ui/core';
import LabelIcon from '@material-ui/icons/Label';
import * as _ from 'lodash';

export const GalleryItemCategoryMenu = (props: any) => {
  const {
    anchorEl,
    categories,
    image,
    onClose,
    open,
    updateImageCategory
  } = props;

  const anchorPosition = {
    top: open ? anchorEl.getBoundingClientRect().bottom - 3 : 0,
    left: open ? anchorEl.getBoundingClientRect().left + 14 : 0
  };

  const onMenuItemClick = (category: any) => {
    updateImageCategory(image.identifier, category.identifier);

    onClose();
  };

  const [unknown, known] = _.partition(categories, category => {
    if (category.identifier === '00000000-0000-0000-0000-000000000000') {
      return category;
    }
  });

  let sortedCategories = _.concat(_.sortBy(known, 'description'), unknown);

  const items = sortedCategories.map((category: any) => (
    <MenuItem
      key={category.identifier}
      onClick={() => onMenuItemClick(category)}
    >
      <ListItemIcon>
        <LabelIcon style={{ color: category.visualization.color }} />
      </ListItemIcon>

      <ListItemText primary={category.description} />
    </MenuItem>
  ));

  return (
    <Popover
      anchorPosition={anchorPosition}
      anchorReference="anchorPosition"
      onClose={onClose}
      open={open}
    >
      <Paper>
        <MenuList dense>{items}</MenuList>
      </Paper>
    </Popover>
  );
};
