import React, { useState } from 'react';
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
import styles from './SidebarCategoryListItem.css';
import Paper from '@material-ui/core/Paper';
import Popover from '@material-ui/core/Popover';
import ConnectedEditCategoryDialog from '../../../containers/ConnectedEditCategoryDialog';
import ConnectedDeleteCategoryDialog from '../../../containers/ConnectedDeleteCategoryDialog';
import { makeStyles } from '@material-ui/styles';

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

const useStyles = makeStyles(styles);

function SidebarCategoryListItem(props) {
  const [editCategoryDialogToggled, setEditCategoryDialogToggled] = useState(
    false
  );
  const [deleteCategoryDialogOpen, setDeleteCategoryDialogOpen] = useState(
    false
  );
  const [animateOnDrop, setAnimateOnDrop] = useState(0);
  const [anchorEl, setAnchorEl] = useState(0);

  const classes = useStyles();

  const {
    identifier,
    updateCategoryVisibility,
    displayThisCategoryOnly,
    setUnlabelledVisibility,
    color,
    connectDropTarget,
    description,
    visible,
    categories
  } = props;

  const open = Boolean(anchorEl);

  return (
    <React.Fragment>
      <StyledCategory
        ref={instance => connectDropTarget(instance)}
        color={color}
        onDrop={() => setAnimateOnDrop(!animateOnDrop)}
        className={
          animateOnDrop !== null
            ? animateOnDrop
              ? 'onDropPulse'
              : 'onDropPulse2'
            : null
        }
      >
        <ListItem
          dense
          style={{ cursor: 'pointer' }}
          classes={{
            root: props.isOver ? classes.isOver : null
          }}
        >
          <ListItemIcon
            onClick={() => updateCategoryVisibility(identifier, !visible)}
          >
            {visible ? (
              <LabelIcon style={{ color: color }} />
            ) : (
              <LabelOutlinedIcon style={{ color: color }} />
            )}
          </ListItemIcon>
          <ListItemText primary={description} />
          <ListItemSecondaryAction>
            <IconButton onClick={e => setAnchorEl(e.currentTarget)}>
              <MoreHorizIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </StyledCategory>

      <Popover
        id="simple-popper"
        open={open}
        onClose={() => setAnchorEl(0)}
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
                displayThisCategoryOnly(identifier);
                setUnlabelledVisibility(false);
                setAnchorEl(0);
              }}
              className={classes.menuItem}
            >
              <ListItemText
                classes={{ primary: classes.primary }}
                primary="Display this only"
              />
            </MenuItem>
            {identifier !== null ? (
              <MenuItem
                onClick={() => {
                  setEditCategoryDialogToggled(!editCategoryDialogToggled);

                  setAnchorEl(0);
                }}
                className={classes.menuItem}
              >
                <ListItemText
                  classes={{ primary: classes.primary }}
                  primary="Edit"
                />
              </MenuItem>
            ) : null}

            {identifier !== null ? (
              <MenuItem
                onClick={() => {
                  setDeleteCategoryDialogOpen(!deleteCategoryDialogOpen);

                  setAnchorEl(0);
                }}
                className={classes.menuItem}
              >
                <ListItemText
                  classes={{ primary: classes.primary }}
                  primary="Delete"
                />
              </MenuItem>
            ) : null}
          </MenuList>
        </Paper>
      </Popover>

      <ConnectedEditCategoryDialog
        onClose={() => setEditCategoryDialogToggled(!editCategoryDialogToggled)}
        open={editCategoryDialogToggled}
        categoryId={identifier}
        description={description}
        color={color}
        categories={categories}
      />

      <ConnectedDeleteCategoryDialog
        onClose={() => setDeleteCategoryDialogOpen(!deleteCategoryDialogOpen)}
        open={deleteCategoryDialogOpen}
        categoryIdentifier={identifier}
        description={description}
      />
    </React.Fragment>
  );
}

export default DropTarget('SelectedItems', spec, collect)(
  SidebarCategoryListItem
);
