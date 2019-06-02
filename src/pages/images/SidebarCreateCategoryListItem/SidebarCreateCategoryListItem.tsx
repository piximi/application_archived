import * as React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { ConnectedCreateCategoryDialog } from '../../../containers';
import { useDialog } from '@piximi/hooks';
import { useTranslation } from 'react-i18next';

const SidebarCreateCategoryListItem = () => {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  const { t: translation } = useTranslation();

  return (
    <React.Fragment>
      <ListItem button onClick={openDialog}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>

        <ListItemText inset primary={translation('Create category')} />
      </ListItem>

      <ConnectedCreateCategoryDialog
        onClose={closeDialog}
        open={openedDialog}
      />
    </React.Fragment>
  );
};

export default SidebarCreateCategoryListItem;
