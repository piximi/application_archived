import * as React from 'react';
import LabelIcon from '@material-ui/icons/Label';
import styles from './ItemLabel.css';
import { IconButton } from '@material-ui/core';
import ItemCategoryMenu from '../ItemCategoryMenu/ItemCategoryMenu';
import { makeStyles } from '@material-ui/styles';
import useMenu from '../../../hooks/Menu';

const useStyles = makeStyles(styles);

const ItemLabel = props => {
  const { anchorEl, openedMenu, openMenu, closeMenu } = useMenu();

  const { color } = props;

  const classes = useStyles();

  return (
    <React.Fragment>
      <IconButton
        aria-label="categorize"
        classes={{ root: classes.iconButton }}
        disableRipple
        onClick={openMenu}
      >
        <LabelIcon style={{ color: color }} />
      </IconButton>

      <ItemCategoryMenu
        anchorEl={anchorEl}
        onClose={closeMenu}
        open={openedMenu}
      />
    </React.Fragment>
  );
};

export default ItemLabel;
