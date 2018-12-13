import React, { PureComponent } from 'react';
import LabelIcon from '@material-ui/icons/Label';
import styles from './ItemLabel.css';
import { withStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import ItemCategoryMenu from '../ItemCategoryMenu/ItemCategoryMenu';

class ItemLabel extends PureComponent {
  state = {
    anchorEl: null
  };

  onClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  onClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, color } = this.props;

    const { anchorEl } = this.state;

    const open = Boolean(anchorEl);

    return (
      <React.Fragment>
        <IconButton
          aria-label="categorize"
          classes={{ root: classes.iconButton }}
          disableRipple
          onClick={this.onClick}
        >
          <LabelIcon style={{ color: color }} />
        </IconButton>

        <ItemCategoryMenu
          anchorEl={anchorEl}
          onClose={this.onClose}
          open={open}
        />
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ItemLabel);
