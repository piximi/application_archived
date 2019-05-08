import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import * as API from '../../../classifier';

const SidebarModelFitListItem = (props: { categories: any; images: any }) => {
  const fit = () => {
    API.fitAndPredict(images, categories);
  };

  const { categories, images } = props;

  return (
    <ListItem dense button onClick={fit}>
      <ListItemIcon>
        <PlayCircleOutlineIcon />
      </ListItemIcon>

      <ListItemText primary="Fit" />
    </ListItem>
  );
};

export default SidebarModelFitListItem;
