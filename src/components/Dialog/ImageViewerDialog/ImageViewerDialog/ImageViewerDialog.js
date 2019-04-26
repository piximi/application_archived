import React from 'react';
import styles from './ImageViewerDialog.css';
import { Dialog } from '@material-ui/core';
import ConnectedImageViewer from '../../../../containers/ConnectedImageViewer';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

const ImageViewerDialog = props => {
  const classes = useStyles();

  const { onClose, open, src, imgIdentifier } = props;

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

export default ImageViewerDialog;
