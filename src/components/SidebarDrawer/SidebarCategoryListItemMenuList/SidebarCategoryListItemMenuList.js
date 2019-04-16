import * as React from 'react';
import {
  MenuItem,
  MenuList,
  Paper,
  Popover,
  ListItemText
} from '@material-ui/core';
import ConnectedEditCategoryDialog from '../../../containers/ConnectedEditCategoryDialog';
import ConnectedDeleteCategoryDialog from '../../../containers/ConnectedDeleteCategoryDialog';
import useDialog from '../../../hooks/Dialog';

const SidebarCategoryListItemMenuList = props => {
  const { anchorEl, categories, category, closeMenu, openedMenu } = props;

  const {
    openedDialog: openedEditCategoryDialog,
    openDialog: openEditCategoryDialog,
    closeDialog: closeEditCategoryDialog
  } = useDialog();

  const {
    openedDialog: openedDeleteCategoryDialog,
    openDialog: openDeleteCategoryDialog,
    closeDialog: closeDeleteCategoryDialog
  } = useDialog();

  const anchorPosition = {
    top: openedMenu ? anchorEl.getBoundingClientRect().bottom - 10 : 0,
    left: openedMenu ? anchorEl.getBoundingClientRect().left : 0
  };

  const onHideOtherCategoriesClick = () => {
    debugger;

    closeMenu();
  };

  const onEditCategoryClick = () => {
    openEditCategoryDialog();

    closeMenu();
  };

  const onDeleteCategoryClick = () => {
    openDeleteCategoryDialog();

    closeMenu();
  };

  return (
    <React.Fragment>
      <Popover
        anchorPosition={anchorPosition}
        anchorReference="anchorPosition"
        id="simple-popper"
        onClose={closeMenu}
        open={openedMenu}
      >
        <Paper>
          <MenuList dense>
            <MenuItem onClick={onHideOtherCategoriesClick}>
              <ListItemText primary="Hide other categories" />
            </MenuItem>

            <MenuItem onClick={onEditCategoryClick}>
              <ListItemText primary="Edit category" />
            </MenuItem>

            <MenuItem onClick={onDeleteCategoryClick}>
              <ListItemText primary="Delete category" />
            </MenuItem>
          </MenuList>
        </Paper>
      </Popover>

      <ConnectedEditCategoryDialog
        categories={categories}
        category={category}
        categoryId={category.identifier}
        color={category.color}
        description={category.description}
        onClose={closeEditCategoryDialog}
        open={openedEditCategoryDialog}
      />

      <ConnectedDeleteCategoryDialog
        category={category}
        categoryIdentifier={category.identifier}
        description={category.description}
        onClose={closeDeleteCategoryDialog}
        open={openedDeleteCategoryDialog}
      />
    </React.Fragment>
  );
};

export default SidebarCategoryListItemMenuList;
