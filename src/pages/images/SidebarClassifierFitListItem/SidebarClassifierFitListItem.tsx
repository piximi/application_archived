import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import { useState } from 'react';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import { useTranslation } from 'react-i18next';
import { useDialog, useSnackbar } from '@piximi/hooks';
import { Snackbar } from '@piximi/components';
import { ConnectedFitClassifierDialog } from '../../../containers';

const SidebarClassifierFitListItem = (props: any) => {
  const { categories, images, openedDrawer } = props;

  const { openedDialog, openDialog, closeDialog } = useDialog();

  const { openedSnackbar, openSnackbar, closeSnackbar } = useSnackbar();

  const [message, setMessage] = useState();

  const { t: translation } = useTranslation();

  return (
    <React.Fragment>
      <ListItem button dense onClick={openDialog}>
        <ListItemIcon>
          <ScatterPlotIcon />
        </ListItemIcon>

        <ListItemText primary={translation('Fit')} />
      </ListItem>

      <Snackbar
        closeSnackbar={closeSnackbar}
        message={message}
        openedSnackbar={openedSnackbar}
      />

      <ConnectedFitClassifierDialog
        closeDialog={closeDialog}
        openedDialog={openedDialog}
        openedDrawer={openedDrawer}
      />
    </React.Fragment>
  );
};

export default SidebarClassifierFitListItem;
