import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from 'material-ui';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from 'material-ui/styles';
import withDragDropContext from './dnd-global-context';
import styles from './Categories.css';
import ConnectedCategory from '../containers/ConnectedCategory';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import CreateCategoryDialog from './CreateCategoryDialog';

const Categories = ({
  classes,
  closeCreateCategoryDialog,
  openCreateCategoryDialog,
  settings,
  categories,
  createCategory
}) => {
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

        <ListItem button onClick={openCreateCategoryDialog}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText inset primary="Create category" />
        </ListItem>
      </List>

      <CreateCategoryDialog
        onClose={closeCreateCategoryDialog}
        open={settings.createCategory.open}
      />
    </React.Fragment>
  );
};

export default withDragDropContext(
  withStyles(styles, { withTheme: true })(Categories)
);
