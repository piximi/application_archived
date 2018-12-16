import React, { PureComponent } from 'react';
import styles from './DeleteButton.css';
import { withStyles } from '@material-ui/core/styles';
import { IconButton, Tooltip } from '@material-ui/core';
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
    const { classes, selectedImages, setSelectedImages } = this.props;

    return (
      <React.Fragment>
        <Tooltip title="Delete">
          <IconButton
            aria-label="Delete"
            classes={{ root: classes.button }}
            onClick={this.toggle}
          >
            <Delete classes={{ root: classes.icon }} />
          </IconButton>
        </Tooltip>

        <ConnectedDeleteImageDialog
          setSelectedImages={setSelectedImages}
          selectedImages={selectedImages}
          onClose={this.toggle}
          open={this.state.open}
        />
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DeleteButton);
