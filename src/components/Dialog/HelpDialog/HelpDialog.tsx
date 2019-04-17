import * as React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const HelpDialog = (props: any) => {
  const { onClose, open } = props;

  const { t } = useTranslation();

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <DialogContentText>&nbsp;</DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="primary">
          {t('Cancel')}
        </Button>

        <Button onClick={onClose} color="primary">
          {t('OK')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default HelpDialog;
