import React from 'react';
import { Snackbar } from '@material-ui/core';

const TrainingSnackbar = props => {
  const { onClose, open } = props;

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={open}
      onClose={onClose}
      message={<span id="message-id">...</span>}
    />
  );
};

export default TrainingSnackbar;
