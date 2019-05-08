import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { useTranslation } from 'react-i18next';
import { Category, Classifier, Image } from '../../../types';
import { Network } from '../../../network';
import { useSnackbar } from '../../../hooks';
import { Snackbar } from '../../../components';
import { useState } from 'react';

type Props = {
  categories: Category[];
  classifier: Classifier;
  images: Image[];
};

const SidebarClassifierFitListItem = (props: Props) => {
  const { categories, classifier, images } = props;

  const network = new Network(categories, classifier, images);

  const { openedSnackbar, openSnackbar, closeSnackbar } = useSnackbar();

  const [message, setMessage] = useState();

  const { t: translation } = useTranslation();

  const fit = () => {
    try {
      network.fit();

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
