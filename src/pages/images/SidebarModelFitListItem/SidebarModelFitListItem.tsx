import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { useTranslation } from 'react-i18next';
import { Category, Classifier, Image } from '../../../types';
import { Network } from '../../../network';

type Props = {
  categories: Category[];
  classifier: Classifier;
  images: Image[];
};

const SidebarModelFitListItem = (props: Props) => {
  const { categories, classifier, images } = props;

  const network = new Network(categories, classifier, images);

  const { t: translation } = useTranslation();

  const fit = () => {
    network.fit();
  };

  return (
    <ListItem dense button onClick={fit}>
      <ListItemIcon>
        <PlayCircleOutlineIcon />
      </ListItemIcon>

      <ListItemText primary={translation('Fit')} />
    </ListItem>
  );
};

export default SidebarModelFitListItem;
