import React, { PureComponent } from 'react';
import styles from './UploadSnackbarContent.css';
import { withStyles } from '@material-ui/core/styles';
import { SnackbarContent } from '@material-ui/core';

class UploadSnackbarContent extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <SnackbarContent
        classes={{ root: classes.snackbarContent }}
        message={<span>&nbsp;</span>}
      />
    );
  }
}

export default withStyles(styles, { withTheme: true })(UploadSnackbarContent);
