import React from 'react';
import {
  Checkbox,
  Grid,
  Input,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction
} from 'material-ui';
import LabelIcon from '@material-ui/icons/Label';
import { DropTarget } from 'react-dnd';
import styles from './Classifier.css';
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
    updateCategoryVisibility,
    updateCategoryDescriptionAction,
    color,
    connectDropTarget,
    description,
    visible
  } = props;

  return connectDropTarget(
    <div>
      <Grid container spacing={0}>
        <ListItem button>
          <Grid item xs={2}>
            <ListItemIcon>
              <LabelIcon style={{ color: color }} />
            </ListItemIcon>
          </Grid>

          <Grid item xs={8}>
            <Input
              style={{ width: '100%' }}
              onChange={updateCategoryDescriptionAction}
              value={description}
            />
          </Grid>

          <Grid item xs={2}>
            <ListItemSecondaryAction>
              <Checkbox checked={visible} onChange={updateCategoryVisibility} />
            </ListItemSecondaryAction>
          </Grid>
        </ListItem>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(DropTarget('Image', spec, collect)(Category));
