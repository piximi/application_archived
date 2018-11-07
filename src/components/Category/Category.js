import React, { Component } from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Tooltip
} from '@material-ui/core';
import LabelIcon from '@material-ui/icons/Label';
import LabelOutlineIcon from '@material-ui/icons/LabelOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { DropTarget } from 'react-dnd';
import styles from './Category.css';
import { withStyles } from '@material-ui/core/styles';

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

type Properties = {};

class Category extends Component<Properties> {
  state = {
    deleteCategoryDialogOpen: false,
    animateOnDrop: null
  };

  toggleDeleteCategoryDialog = () => {
    this.setState({
      deleteCategoryDialogOpen: !this.state.deleteCategoryDialogOpen
    });
  };

  onDropAnimation = () => {
    this.setState({
      animateOnDrop: !this.state.animateOnDrop
    });
  };

  render() {
    const {
      identifier,
      updateCategoryVisibility,
      color,
      connectDropTarget,
      description,
      images,
      visible,
      classes
    } = this.props;
    console.log(classes);

    return connectDropTarget(
      <div
        onDrop={this.onDropAnimation}
        className={
          this.state.animateOnDrop !== null
            ? this.state.animateOnDrop
              ? classes.onDropPulse
              : classes.onDropPulse2
            : null
        }
      >
        <ListItem
          dense
          button
          onClick={() => updateCategoryVisibility(identifier, images, !visible)}
          classes={{
            root: this.props.isOver ? classes.isOver : null
          }}
        >
          <ListItemIcon>
            {visible ? (
              <LabelIcon style={{ color: color }} />
            ) : (
              <LabelOutlineIcon style={{ color: color }} />
            )}
          </ListItemIcon>

          <ListItemText primary={description} />

          <ListItemSecondaryAction>
            <Tooltip id="tooltip-icon" title="Category settings">
              <ListItemIcon classes={{ root: classes.icon }}>
                <MoreHorizIcon />
              </ListItemIcon>
            </Tooltip>
          </ListItemSecondaryAction>
        </ListItem>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(
  DropTarget('SelectedItems', spec, collect)(Category)
);
