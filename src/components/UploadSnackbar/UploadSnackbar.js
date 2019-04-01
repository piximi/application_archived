import React from 'react';
import styles from './UploadSnackbar.css';
import { withStyles } from '@material-ui/core/styles';
import { Snackbar } from '@material-ui/core';
import UploadSnackbarContent from '../UploadSnackbarContent/UploadSnackbarContent';

function UploadSnackbar(props) {
  const { classes, open, onClose } = props;

  return (
    <Snackbar
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      classes={{ root: classes.snackbar }}
      message={<span id="message-id">&nbsp;</span>}
      onClose={onClose}
      open={open}
    >
      <UploadSnackbarContent />
    </Snackbar>
  );
}

withStyles(styles, { withTheme: true })(UploadSnackbar);
