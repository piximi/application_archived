import { AppBar, Button, Toolbar, Typography } from 'material-ui';
import React, { Component } from 'react';
import styles from './Primary.css';
import { withStyles } from 'material-ui/styles/index';
import Download from '@axetroy/react-download';

class Primary extends Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar position="fixed" className={classes.appBar} color="default">
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            Cyto
          </Typography>

          <Button onClick={this.train}>Run</Button>

          <input onChange={this.open} type="file" />

          <Download file="example.cyto" content={JSON.stringify(this.state)}>
            <Button onClick={this.save}>Save</Button>
          </Download>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Primary);
