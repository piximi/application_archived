import React, { PureComponent } from 'react';
import styles from './ImageViewerDialog.css';
import { withStyles } from '@material-ui/core/styles';
import { Dialog } from '@material-ui/core';
import ImageViewer from '../ImageViewer/ImageViewer';

class ImageViewerDialog extends PureComponent {
  render() {
    const { classes, onClose, open, src } = this.props;

    return (
      <Dialog
        className={classes.settingsDialog}
        fullScreen
        open={open}
        onClose={onClose}
      >
        <ImageViewer onClose={onClose} src={src} />
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ImageViewerDialog);
