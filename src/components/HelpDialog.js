import React from 'react';
import styles from './HelpDialog.css';
import { withStyles } from 'material-ui/styles/index';
import { Dialog, DialogContent, DialogContentText } from 'material-ui';

const HelpDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <DialogContentText>&nbsp;</DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default withStyles(styles)(HelpDialog);
