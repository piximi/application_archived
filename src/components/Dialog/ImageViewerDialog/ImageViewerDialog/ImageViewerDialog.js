import React, { PureComponent } from 'react';
import styles from './ImageViewerDialog.css';
import { withStyles } from '@material-ui/core/styles';
import { Dialog } from '@material-ui/core';
import ConnectedImageViewer from '../../../../containers/ConnectedImageViewer';

class ImageViewerDialog extends PureComponent {
  render() {
    const { classes, onClose, open, src, imgIdentifier } = this.props;
    return (
      <Dialog
        className={classes.settingsDialog}
        fullScreen
        open={open}
        onClose={onClose}
      >
        <ConnectedImageViewer
          imgIdentifier={imgIdentifier}
          src={src}
          onClose={onClose}
        />
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ImageViewerDialog);
