import React, { Component } from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Tooltip
} from 'material-ui';
import LabelIcon from '@material-ui/icons/Label';
import LabelOutlineIcon from '@material-ui/icons/LabelOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import { DropTarget } from 'react-dnd';
import styles from './Category.css';
import { withStyles } from 'material-ui/styles/index';
import ConnectedDeleteCategoryDialog from '../../containers/ConnectedDeleteCategoryDialog';

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

class Category extends Component {
  state = {
    deleteCategoryDialogOpen: false
  };

  toggleDeleteCategoryDialog = () => {
    this.setState({
      deleteCategoryDialogOpen: !this.state.deleteCategoryDialogOpen
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
      visible
    } = this.props;

    return connectDropTarget(
      <div>
        <ListItem
          dense
          button
          onClick={() => updateCategoryVisibility(identifier, images, !visible)}
          classes={{
            root: this.props.isOver
              ? this.props.classes.isOver
              : this.props.classes.isNotOver
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
            <Tooltip id="tooltip-icon" title="Delete category">
              <ListItemIcon
                onClick={this.toggleDeleteCategoryDialog}
                classes={{ root: this.props.classes.icon }}
              >
                <DeleteIcon />
              </ListItemIcon>
            </Tooltip>
          </ListItemSecondaryAction>
        </ListItem>

        <ConnectedDeleteCategoryDialog
          description={description}
          identifier={identifier}
          onClose={this.toggleDeleteCategoryDialog}
          open={this.state.deleteCategoryDialogOpen}
        />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(
  DropTarget('Image', spec, collect)(Category)
);
