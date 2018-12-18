import React, { PureComponent } from 'react';
import styles from './ImportImagesButton.css';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import classNames from 'classnames';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import UploadDialog from '../UploadDialog/UploadDialog';

class ImportImagesButton extends PureComponent {
  state = {
    open: false
  };

  toggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Button className={classNames(classes.button)} onClick={this.toggle}>
          <AddPhotoAlternateIcon className={classNames(classes.icon)} />
          Import images
        </Button>

        <UploadDialog onClose={this.toggle} open={this.state.open} />
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ImportImagesButton);
