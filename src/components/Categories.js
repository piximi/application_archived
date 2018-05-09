import React from 'react';
import { Button, List, ListSubheader } from 'material-ui';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from 'material-ui/styles';
import withDragDropContext from './dnd-global-context';
import styles from './Categories.css';
import ConnectedCategory from '../containers/ConnectedCategory';

const Categories = ({ classes, categories, createCategory }) => {
  return (
    <React.Fragment>
      <List subheader={<ListSubheader>Categories</ListSubheader>}>
        {categories.map(category => (
          <ConnectedCategory
            key={category.identifier}
            identifier={category.identifier}
          />
        ))}
      </List>

      <Button className={classes.create} onClick={createCategory} variant="fab">
        <AddIcon />
      </Button>
    </React.Fragment>
  );
};

export default withDragDropContext(
  withStyles(styles, { withTheme: true })(Categories)
);
