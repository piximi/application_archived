import React, { PureComponent } from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import styles from './ChannelSelection.css';
import { withStyles } from '@material-ui/core/styles';

class ChannelSelection extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      selected: {
        R: true,
        G: true,
        B: true,
        A: true
      }
    };
  }

  render() {
    return (
      <React.Fragment>
        <FormControlLabel
          control={<Checkbox checked={true} value="checkedF" indeterminate />}
          label="R"
          labelPlacement="start"
        />
        <FormControlLabel
          control={<Checkbox checked={true} value="checkedF" indeterminate />}
          label="R"
          labelPlacement="start"
        />
        <FormControlLabel
          control={<Checkbox checked={true} value="checkedF" indeterminate />}
          label="R"
          labelPlacement="start"
        />
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ChannelSelection);
