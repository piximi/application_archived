import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import { useState } from 'react';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from '@cytoai/hooks';
import { Snackbar } from '@cytoai/components';
import { Network } from '../../../network';

const SidebarClassifierFitListItem = (props: any) => {
  const { categories, images } = props;

  const { openedSnackbar, openSnackbar, closeSnackbar } = useSnackbar();

  const [message, setMessage] = useState();

  const { t: translation } = useTranslation();

  const fit = async () => {
    try {
      const network = new Network(categories, images);

      const dataset = await network.dataset();

      console.log(dataset);

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
