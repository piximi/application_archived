import React, { PureComponent } from 'react';
import LabelIcon from '@material-ui/icons/Label';
import styles from './ItemLabel.css';
import { withStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';

class ItemLabel extends PureComponent {
  render() {
    const { classes, color } = this.props;

    return (
      <IconButton
        aria-label="categorize"
        classes={{ root: classes.iconButton }}
        disableRipple
      >
        <LabelIcon style={{ color: color }} />
      </IconButton>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ItemLabel);
