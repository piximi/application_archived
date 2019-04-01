import React, { useState } from 'react';
import LabelIcon from '@material-ui/icons/Label';
import styles from './ItemLabel.css';
import { withStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import ItemCategoryMenu from '../ItemCategoryMenu/ItemCategoryMenu';

function ItemLabel(props) {
  const [anchorEl, setAnchorEl] = useState(0);

  const { classes, color } = props;
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
}

export default withStyles(styles, { withTheme: true })(ItemLabel);
