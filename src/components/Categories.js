import React from 'react';
import { Button, List, ListSubheader } from 'material-ui';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from 'material-ui/styles';
import withDragDropContext from './dnd-global-context';
import styles from './Categories.css';
import ConnectedCategory from '../containers/ConnectedCategory';

const Categories = props => {
  return (
    <React.Fragment>
      <List subheader={<ListSubheader>Categories</ListSubheader>}>
        {props.categories.map(category => (
          <ConnectedCategory
            categoryOnChange={props.categoryOnChange}
            categoryOnNameChange={props.categoryOnNameChange}
            color={category.color}
            identifier={category.identifier}
            index={category.index}
            key={category.identifier}
            name={category.name}
            visible={category.visible}
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
