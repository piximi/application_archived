import React from 'react';
import {
  Checkbox,
  Grid,
  IconButton,
  Input,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from 'material-ui';
import LabelIcon from '@material-ui/icons/Label';
import LabelOutlineIcon from '@material-ui/icons/LabelOutline';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { DropTarget } from 'react-dnd';
import styles from './Category.css';
import { withStyles } from 'material-ui/styles/index';

const spec = {
  drop(props, monitor, component) {
    return {
      category: props.identifier,
      color: props.color
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

const Category = props => {
  const {
    deleteCategory,
    updateCategoryVisibility,
    updateCategoryDescription,
    color,
    connectDropTarget,
    description,
    visible
  } = props;

  return connectDropTarget(
    <div>
      <ListItem dense button onClick={updateCategoryVisibility}>
        <ListItemIcon>
          {visible ? (
            <LabelIcon style={{ color: color }} />
          ) : (
            <LabelOutlineIcon style={{ color: color }} />
          )}
        </ListItemIcon>

        {/*<Input style={{ width: '100%' }} onChange={updateCategoryDescription} value={description}/>*/}

        <ListItemText primary={description} />

        <ListItemSecondaryAction>
          <ListItemIcon
            onClick={deleteCategory}
            classes={{ root: props.classes.icon }}
          >
            <DeleteIcon />
          </ListItemIcon>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  );
};

export default withStyles(styles)(DropTarget('Image', spec, collect)(Category));
