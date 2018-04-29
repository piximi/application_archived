import React from 'react';
import { Button, List, ListSubheader } from 'material-ui';
import Category from './Category';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from 'material-ui/styles';
import withDragDropContext from './dnd-global-context';
import styles from './Categories.css';

const Categories = props => {
  return (
    <React.Fragment>
      <List subheader={<ListSubheader>Categories</ListSubheader>}>
        {props.categories.map(category => (
          <Category
            key={category.index}
            index={category.index}
            color={category.color}
            name={category.name}
          />
        ))}
      </List>

      <Button
        className={props.classes.create}
        onClick={props.onClick}
        variant="fab"
      >
        <AddIcon />
      </Button>
    </React.Fragment>
  );
};

export default withDragDropContext(
  withStyles(styles, { withTheme: true })(Categories)
);
