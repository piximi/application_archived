import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from 'material-ui';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from 'material-ui/styles';
import withDragDropContext from './dnd-global-context';
import styles from './Categories.css';
import ConnectedCategory from '../containers/ConnectedCategory';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ConnectedCreateCategoryDialog from '../containers/ConnectedCreateCategoryDialog';

const Categories = ({
  categories,
  classes,
  closeCreateCategoryDialog,
  settings,
  toggleCreateCategoryDialog
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
            categories={categories}
          />
        ))}

        <ListItem button onClick={toggleCreateCategoryDialog}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText inset primary="Create category" />
        </ListItem>
      </List>

      <ConnectedCreateCategoryDialog
        onClose={closeCreateCategoryDialog}
        open={settings.createCategory.open}
      />
    </React.Fragment>
  );
};

export default withDragDropContext(
  withStyles(styles, { withTheme: true })(Categories)
);
