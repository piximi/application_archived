import React, { PureComponent } from 'react';
import styles from './ImportImagesButton.css';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import classNames from 'classnames';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

class ImportImagesButton extends PureComponent {
  render() {
    const { classes, toggleUploadDialog } = this.props;

    return (
      <Button
        className={classNames(classes.button)}
        onClick={toggleUploadDialog}
      >
        <AddPhotoAlternateIcon className={classNames(classes.icon)} />
        Import images
      </Button>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ImportImagesButton);
