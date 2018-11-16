import React, { Component } from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from '@material-ui/core';
import LabelIcon from '@material-ui/icons/Label';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import IconButton from '@material-ui/core/IconButton';
import { DropTarget } from 'react-dnd';
import StyledCategory from './StyledCategory';
import styles from './Category.css';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';

const spec = {
  drop(props, monitor, component) {
    const selectedItems = monitor.getItem().selectedItems;
    const categoryIdentifer = props.identifier;
    return {
      categoryIdentifier: categoryIdentifer,
      color: props.color,
      selectedItems: selectedItems
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
    deleteCategoryDialogOpen: false,
    animateOnDrop: null,
    anchorEl: null
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

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
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
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <StyledCategory
        ref={instance => connectDropTarget(instance)}
        color={color}
        onDrop={this.onDropAnimation}
        className={
          this.state.animateOnDrop !== null
            ? this.state.animateOnDrop
              ? 'onDropPulse'
              : 'onDropPulse2'
            : null
        }
      >
        <ListItem
          dense
          style={{ cursor: 'pointer' }}
          classes={{
            root: this.props.isOver ? classes.isOver : null
          }}
        >
          <ListItemIcon
            onClick={() =>
              updateCategoryVisibility(identifier, images, !visible)
            }
          >
            {visible ? (
              <LabelIcon style={{ color: color }} />
            ) : (
              <LabelOutlinedIcon style={{ color: color }} />
            )}
          </ListItemIcon>
          <ListItemText primary={description} />
          <ListItemSecondaryAction>
            <IconButton onClick={this.handleClick}>
              <MoreHorizIcon />
            </IconButton>
          </ListItemSecondaryAction>

          <Popover
            id="simple-popper"
            open={open}
            onClose={this.handleClose}
            anchorReference="anchorPosition"
            anchorPosition={{
              top: open ? anchorEl.getBoundingClientRect().bottom - 10 : null,
              left: open ? anchorEl.getBoundingClientRect().left : null
            }}
          >
            <Paper>
              <MenuList>
                <MenuItem className={classes.menuItem}>
                  <ListItemText
                    classes={{ primary: classes.primary }}
                    primary="Edit"
                  />
                </MenuItem>
                <MenuItem className={classes.menuItem}>
                  <ListItemText
                    classes={{ primary: classes.primary }}
                    primary="Delete"
                  />
                </MenuItem>
              </MenuList>
            </Paper>
          </Popover>
        </ListItem>
      </StyledCategory>
    );
  }
}

export default withStyles(styles, { withTheme: true })(
  DropTarget('SelectedItems', spec, collect)(Category)
);
