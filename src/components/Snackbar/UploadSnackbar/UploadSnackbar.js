import React from 'react';
import styles from './UploadSnackbar.css';
import { Snackbar } from '@material-ui/core';
import UploadSnackbarContent from '../UploadSnackbarContent/UploadSnackbarContent';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

export default function UploadSnackbar(props) {
  const { open, onClose } = props;

  const classes = useStyles();

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
