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
    categoryOnChange,
    categoryOnNameChange,
    color,
    connectDropTarget,
    identifier,
    name,
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
              className={styles.name}
              onChange={event => categoryOnNameChange(event, identifier)}
              value={name}
            />
          </Grid>

          <Grid item xs={2}>
            <ListItemSecondaryAction>
              <Checkbox
                checked={visible}
                onChange={event => categoryOnChange(event, identifier)}
              />
            </ListItemSecondaryAction>
          </Grid>
        </ListItem>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(DropTarget('Image', spec, collect)(Category));
