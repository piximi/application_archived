import * as React from 'react';
import styles from './ImageDialog.css';
import { Dialog } from '@material-ui/core';
import { ConnectedImageDialogContent } from '..';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

export const ImageDialog = (props: any) => {
  const classes = useStyles({});

  const { onClose, open, src, imgIdentifier } = props;

  return (
    <Dialog className={classes.root} fullScreen open={open} onClose={onClose}>
      <ConnectedImageDialogContent
        imgIdentifier={imgIdentifier}
        src={src}
        onClose={onClose}
      />
    </Dialog>
  );
};
