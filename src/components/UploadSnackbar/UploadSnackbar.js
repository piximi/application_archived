import React, { PureComponent } from 'react';
import styles from './UploadSnackbar.css';
import { withStyles } from '@material-ui/core/styles';
import { Snackbar } from '@material-ui/core';

class UploadSnackbar extends PureComponent {
  render() {
    const { classes, open, onClose } = this.props;

    return (
      <Snackbar
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        classes={{ root: classes.snackbar }}
        message={<span id="message-id">&nbsp;</span>}
        onClose={onClose}
        open={open}
      />
    );
  }
}

export default withStyles(styles, { withTheme: true })(UploadSnackbar);
