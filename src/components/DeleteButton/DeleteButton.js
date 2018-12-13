import React, { PureComponent } from 'react';
import styles from './DeleteButton.css';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import classNames from 'classnames';
import Delete from '@material-ui/icons/Delete';
import ConnectedDeleteImageDialog from '../../containers/ConnectedDeleteImageDialog';

class DeleteButton extends PureComponent {
  state = {
    open: false
  };

  toggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const { classes, selectedImages } = this.props;

    return (
      <React.Fragment>
        <Button
          aria-label="delete-image"
          classes={{ root: classes.button }}
          onClick={this.toggle}
        >
          <Delete classes={{ root: classes.icon }} />
        </Button>

        <ConnectedDeleteImageDialog
          selectedImages={selectedImages}
          onClose={this.toggle}
          open={this.state.open}
        />
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DeleteButton);
