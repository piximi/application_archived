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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const Categories = ({ classes, categories, createCategory }) => {
  return (
    <React.Fragment>
      <List dense>
        <ListItem button>
          <ListItemIcon>
            <ExpandLessIcon />
          </ListItemIcon>

          <ListItemText inset primary="Categories" />
        </ListItem>

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
