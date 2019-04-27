import * as React from 'react';
import styles from './ImageViewerDialog.css';
import { Dialog } from '@material-ui/core';
import { ConnectedImageViewer } from '../../../containers';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

const ImageViewerDialog = (props: any) => {
  const classes = useStyles();

  const { onClose, open, src, imgIdentifier } = props;

  return (
    <Dialog className={classes.root} fullScreen open={open} onClose={onClose}>
      <ConnectedImageViewer
        imgIdentifier={imgIdentifier}
        src={src}
        onClose={onClose}
      />
    </Dialog>
  );
};

export default ImageViewerDialog;
