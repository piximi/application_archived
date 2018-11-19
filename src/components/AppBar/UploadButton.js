import React, { Component } from 'react';
import styles from './UploadButton.css';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import classNames from 'classnames';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';

class UploadButton extends Component {
  render() {
    const { classes, toggleUploadDialog } = this.props;

    return (
      <Button
        className={classNames(classes.button)}
        onClick={toggleUploadDialog}
      >
        <CloudUploadOutlinedIcon className={classNames(classes.icon)} />
        Upload images
      </Button>
    );
  }
}

export default withStyles(styles, { withTheme: true })(UploadButton);
