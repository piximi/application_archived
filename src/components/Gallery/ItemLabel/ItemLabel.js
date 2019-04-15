import React, { useState } from 'react';
import LabelIcon from '@material-ui/icons/Label';
import styles from './ItemLabel.css';
import { IconButton } from '@material-ui/core';
import ItemCategoryMenu from '../ItemCategoryMenu/ItemCategoryMenu';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

const ItemLabel = props => {
  const [anchorEl, setAnchorEl] = useState(null);

  const { color } = props;

  const classes = useStyles();

  const open = Boolean(anchorEl);

  return (
    <React.Fragment>
      <IconButton
        aria-label="categorize"
        classes={{ root: classes.iconButton }}
        disableRipple
        onClick={e => setAnchorEl(e.currentTarget)}
      >
        <LabelIcon style={{ color: color }} />
      </IconButton>

      <ItemCategoryMenu
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        open={open}
      />
    </React.Fragment>
  );
};

export default ItemLabel;
