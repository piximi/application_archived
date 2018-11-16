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
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { withStyles } from '@material-ui/core/styles';

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
    editCategoryMenuOpen: false,
    animateOnDrop: null
  };

  toggleDeleteCategoryDialog = () => {
    this.setState({
      deleteCategoryDialogOpen: !this.state.deleteCategoryDialogOpen
    });
  };

  toggleCategoryMenuOpen = () => {
    this.setState({
      editCategoryMenuOpen: !this.state.editCategoryMenuOpen
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
    const { editCategoryMenuOpen } = this.state;

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
        <ClickAwayListener
          onClickAway={() => this.setState({ editCategoryMenuOpen: false })}
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
              <IconButton onClick={this.toggleCategoryMenuOpen}>
                <MoreHorizIcon />
              </IconButton>
            </ListItemSecondaryAction>
            {editCategoryMenuOpen ? (
              <Paper
                style={{
                  position: 'absolute',
                  left: '140px',
                  top: '46px',
                  zIndex: 1
                }}
              >
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
            ) : null}
          </ListItem>
        </ClickAwayListener>
      </StyledCategory>
    );
  }
}

export default withStyles(styles, { withTheme: true })(
  DropTarget('SelectedItems', spec, collect)(Category)
);
