import React from 'react';
import { Snackbar } from '@material-ui/core';

export default function TrainingSnackbar() {
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={true}
      onClose={() => {}}
      ContentProps={{
        'aria-describedby': 'message-id'
      }}
      message={<span id="message-id">I love snacks</span>}
    />
  );
}
