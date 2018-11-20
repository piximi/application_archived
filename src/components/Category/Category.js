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
import ConnectedEditCategoryDialog from '../../containers/ConnectedEditCategoryDialog';
import ConnectedDeleteCategoryDialog from '../../containers/ConnectedDeleteCategoryDialog';

const spec = {
  drop(props, monitor, component) {
    const selectedItems = monitor.getItem().selectedItems;
    const categoryIdentifer = props.identifier;
    return {
      categoryIdentifier: categoryIdentifer,
      categoryName: props.description,
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
    editCategoryDialogToggled: false,
    deleteCategoryDialogOpen: false,
    animateOnDrop: null,
    anchorEl: null
  };

  toggleEditCategoryDialog = () => {
    this.setState({
      editCategoryDialogToggled: !this.state.editCategoryDialogToggled
    });
  };

  toggleDeleteCategoryDialog = () => {
    this.setState({
      deleteCategoryDialogOpen: !this.state.deleteCategoryDialogOpen
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
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

    const {
      anchorEl,
      editCategoryDialogToggled,
      deleteCategoryDialogOpen
    } = this.state;
    const open = Boolean(anchorEl);

    return (
      <React.Fragment>
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
                top: open ? anchorEl.getBoundingClientRect().bottom - 10 : 0,
                left: open ? anchorEl.getBoundingClientRect().left : 0
              }}
            >
              <Paper>
                <MenuList>
                  <MenuItem
                    onClick={() => {
                      this.toggleEditCategoryDialog();
                      this.setState({ anchorEl: null });
                    }}
                    className={classes.menuItem}
                  >
                    <ListItemText
                      classes={{ primary: classes.primary }}
                      primary="Edit"
                    />
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      this.toggleDeleteCategoryDialog();
                      this.setState({ anchorEl: null });
                    }}
                    className={classes.menuItem}
                  >
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
        <ConnectedEditCategoryDialog
          onClose={this.toggleEditCategoryDialog}
          open={editCategoryDialogToggled}
          categoryId={identifier}
          description={description}
          color={color}
        />
        <ConnectedDeleteCategoryDialog
          categoryIdentifier={identifier}
          description={description}
          open={deleteCategoryDialogOpen}
          onClose={this.toggleDeleteCategoryDialog}
        />
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(
  DropTarget('SelectedItems', spec, collect)(Category)
);
