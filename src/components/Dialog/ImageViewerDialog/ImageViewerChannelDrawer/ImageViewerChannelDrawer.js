import React from 'react';
import styles from './ImageViewerChannelDrawer.css';
import { withStyles } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core';

const ImageViewerChannelDrawer = props => {
  const { classes, onClose, open } = props;

  return (
    <Drawer
      anchor="right"
      classes={{ paper: classes.paper }}
      onClose={onClose}
      open={open}
    >
      <div
        className={classes.content}
        onClick={onClose}
        onKeyDown={onClose}
        role="button"
        tabIndex={0}
      >
        <span>Channel</span>
      </div>
    </Drawer>
  );
};

export default withStyles(styles, { withTheme: true })(
  ImageViewerChannelDrawer
);
