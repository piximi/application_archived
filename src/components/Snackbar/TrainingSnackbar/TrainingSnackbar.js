import React from 'react';
import { Snackbar } from '@material-ui/core';

export default function TrainingSnackbar(props) {
  const { onClose, open } = props;

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={open}
      onClose={onClose}
      message={<span id="message-id">...</span>}
    />
  );
}
