import * as React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ConnectedCreateCategoryDialog from '../../../containers/ConnectedCreateCategoryDialog';
import useDialog from '../../../hooks/Dialog';
import { useTranslation } from 'react-i18next';

const CreateCategoryListItem = () => {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  const { t } = useTranslation();

  return (
    <React.Fragment>
      <ListItem button onClick={openDialog}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>

        <ListItemText inset primary={t('Create category')} />
      </ListItem>

      <ConnectedCreateCategoryDialog
        onClose={closeDialog}
        open={openedDialog}
      />
    </React.Fragment>
  );
};

export default CreateCategoryListItem;
