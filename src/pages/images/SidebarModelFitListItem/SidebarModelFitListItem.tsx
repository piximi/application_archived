import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { useTranslation } from 'react-i18next';
import { Category, Classifier, Image } from '../../../types';
import { Network } from '../../../network';
import { useSnackbar } from '../../../hooks';
import { Snackbar } from '../../../components';

type Props = {
  categories: Category[];
  classifier: Classifier;
  images: Image[];
};

const SidebarModelFitListItem = (props: Props) => {
  const { categories, classifier, images } = props;

  const network = new Network(categories, classifier, images);

  const { openedSnackbar, openSnackbar, closeSnackbar } = useSnackbar();

  const { t: translation } = useTranslation();

  const fit = () => {
    openSnackbar();

    network.fit();
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
        message={'foo'}
        openedSnackbar={openedSnackbar}
      />
    </React.Fragment>
  );
};

export default SidebarModelFitListItem;
