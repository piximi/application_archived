import React, { useState } from 'react';
import styles from './ImportImagesButton.css';
import { Button } from '@material-ui/core';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import UploadDialog from '../UploadDialog/UploadDialog';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

export default function ImportImagesButton(props) {
  const [open, setOpen] = useState(0);

  const classes = useStyles();

  return (
    <React.Fragment>
      <Button className={classes.button} onClick={() => setOpen(!open)}>
        <AddPhotoAlternateIcon className={classes.icon} />
        Import images
      </Button>

      <UploadDialog onClose={() => setOpen(!open)} open={open} />
    </React.Fragment>
  );
}
