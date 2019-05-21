import * as React from 'react';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import AddIcon from '@material-ui/icons/Add';

const OpenExampleClassifierListItem = (props: any) => {
  const { t: translation } = useTranslation();

  const { onClick, primary, secondary, src } = props;

  return (
    <ListItem button onClick={onClick}>
      <ListItemAvatar>
        <Avatar src={src}>
          <AddIcon />
        </Avatar>
      </ListItemAvatar>

      <ListItemText
        primary={translation(primary)}
        secondary={translation(secondary)}
      />
    </ListItem>
  );
};

export default OpenExampleClassifierListItem;
