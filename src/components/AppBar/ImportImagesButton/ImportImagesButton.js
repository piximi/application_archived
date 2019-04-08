import React from 'react';
import styles from './ImportImagesButton.css';
import { Button } from '@material-ui/core';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import UploadDialog from '../../Dialog/UploadDialog/UploadDialog';
import { makeStyles } from '@material-ui/styles';
import useDialog from '../../../hooks/Dialog';

const useStyles = makeStyles(styles);

export default function ImportImagesButton() {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  const classes = useStyles();

  return (
    <React.Fragment>
      <Button className={classes.button} onClick={openDialog}>
        <AddPhotoAlternateIcon className={classes.icon} />
        Import images
      </Button>

      <UploadDialog onClose={closeDialog} open={openedDialog} />
    </React.Fragment>
  );
}
