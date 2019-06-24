import * as React from 'react';
import { Snackbar } from '@material-ui/core';
import { UploadSnackbarContent } from '..';

export const UploadSnackbar = (props: any) => {
  const { open, onClose } = props;

  return (
    <Snackbar
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      message={<span id="message-id">&nbsp;</span>}
      onClose={onClose}
      open={open}
    >
      <UploadSnackbarContent />
    </Snackbar>
  );
};
