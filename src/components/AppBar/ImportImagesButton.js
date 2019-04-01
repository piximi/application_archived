import React, { useState } from 'react';
import styles from './ImportImagesButton.css';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import classNames from 'classnames';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import UploadDialog from '../UploadDialog/UploadDialog';

export default function ImportImagesButton(props) {
  const [open, setOpen] = useState(0);

  const { classes } = props;

  return (
    <React.Fragment>
      <Button
        className={classNames(classes.button)}
        onClick={() => setOpen(!open)}
      >
        <AddPhotoAlternateIcon className={classNames(classes.icon)} />
        Import images
      </Button>

      <UploadDialog onClose={() => setOpen(!open)} open={open} />
    </React.Fragment>
  );
}

withStyles(styles, { withTheme: true })(ImportImagesButton);
