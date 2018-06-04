import React from 'react';
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from 'material-ui';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from 'material-ui/styles';
import withDragDropContext from './dnd-global-context';
import styles from './Categories.css';
import ConnectedCategory from '../containers/ConnectedCategory';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ConnectedCreateCategoryDialog from '../containers/ConnectedCreateCategoryDialog';

const Categories = ({
  categories,
  classes,
  closeCreateCategoryDialog,
  settings,
  toggleCategoriesCollapse,
  toggleCreateCategoryDialog
}) => {
  return (
    <React.Fragment>
      <List dense>
        <ListItem button onClick={toggleCategoriesCollapse}>
          <ListItemIcon>
            {!settings.categories.collapsed ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )}
          </ListItemIcon>

          <ListItemText inset primary="Categories" />
        </ListItem>

        <Collapse
          in={!settings.categories.collapsed}
          timeout="auto"
          unmountOnExit
        >
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
        </Collapse>
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
