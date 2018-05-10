import React from 'react';
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from 'material-ui';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from 'material-ui/styles';
import withDragDropContext from './dnd-global-context';
import styles from './Categories.css';
import ConnectedCategory from '../containers/ConnectedCategory';

const Categories = ({ classes, categories, createCategory }) => {
  return (
    <React.Fragment>
      <List dense>
        {categories.map(category => (
          <ConnectedCategory
            key={category.identifier}
            identifier={category.identifier}
          />
        ))}

        <ListItem button onClick={createCategory}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText inset primary="Create category" />
        </ListItem>
      </List>
    </React.Fragment>
  );
};

export default withDragDropContext(
  withStyles(styles, { withTheme: true })(Categories)
);
