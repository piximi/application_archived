import React from 'react';
import styles from './ImageViewerDialog.css';
import { withStyles } from '@material-ui/core/styles';
import { Dialog } from '@material-ui/core';
import ConnectedImageViewer from '../../../../containers/ConnectedImageViewer';

const ImageViewerDialog = props => {
  const { classes, onClose, open, src, imgIdentifier } = props;
  return (
    <Dialog
      className={classes.settingsDialog}
      fullScreen
      open={open}
      onClose={onClose}
    >
      <ConnectedImageViewer
        imgIdentifier={imgIdentifier}
        src={src}
        onClose={onClose}
      />
    </Dialog>
  );
};

export default withStyles(styles, { withTheme: true })(ImageViewerDialog);
