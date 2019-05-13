import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from '@cytoai/hooks';
import { Snackbar } from '@cytoai/components';
import { useState } from 'react';

const SidebarClassifierFitListItem = () => {
  const { openedSnackbar, openSnackbar, closeSnackbar } = useSnackbar();

  const [message, setMessage] = useState();

  const { t: translation } = useTranslation();

  const fit = () => {
    try {
      setMessage('success');
    } catch (e) {
      setMessage(e);
    }

    openSnackbar();
  };

  return (
    <React.Fragment>
      <ListItem button dense onClick={fit}>
        <ListItemIcon>
          <PlayCircleOutlineIcon />
        </ListItemIcon>

        <ListItemText primary={translation('Fit')} />
      </ListItem>

      <Snackbar
        closeSnackbar={closeSnackbar}
        message={message}
        openedSnackbar={openedSnackbar}
      />
    </React.Fragment>
  );
};

export default SidebarClassifierFitListItem;
