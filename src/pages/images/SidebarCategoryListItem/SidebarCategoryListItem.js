import * as React from 'react';
import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from '@material-ui/core';
import LabelIcon from '@material-ui/icons/Label';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import StyledCategory from './StyledCategory';
import styles from './SidebarCategoryListItem.css';
import { makeStyles } from '@material-ui/styles';
import { useMenu } from '../../../hooks';
import { SidebarCategoryListItemMenuList } from '..';
import { ConnectedCategoryDropTarget } from '../../../containers';

const useStyles = makeStyles(styles);

const SidebarCategoryListItem = props => {
  const { categories, category, toggleVisibility } = props;

  const { anchorEl, openedMenu, openMenu, closeMenu } = useMenu();

  const [animateOnDrop, setAnimateOnDrop] = React.useState(null);

  const classes = useStyles();

  const onToggleVisibilityClick = () => {
    toggleVisibility(category.identifier);
  };

  const VisibleIcon = props => {
    const { color, visible } = props;

    if (visible) {
      return <LabelIcon style={{ color: color }} />;
    } else {
      return <LabelOutlinedIcon style={{ color: color }} />;
    }
  };

  return (
    <ConnectedCategoryDropTarget category={category}>
      <StyledCategory
        color={category.color}
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
          <ListItemIcon onClick={onToggleVisibilityClick}>
            <VisibleIcon color={category.color} visible={category.visible} />
          </ListItemIcon>
          <ListItemText primary={category.description} />
          <ListItemSecondaryAction>
            <IconButton onClick={openMenu}>
              <MoreHorizIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </StyledCategory>

      <SidebarCategoryListItemMenuList
        anchorEl={anchorEl}
        categories={categories}
        category={category}
        closeMenu={closeMenu}
        openedMenu={openedMenu}
      />
    </ConnectedCategoryDropTarget>
  );
};

export default SidebarCategoryListItem;
