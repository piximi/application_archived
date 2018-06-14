import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import styles from './Application.css';
import classNames from 'classnames';
import ConnectedSidebar from '../../containers/ConnectedSidebar';
import PrimaryAppBar from '../AppBar/PrimaryAppBar';

class Application extends Component {
  state = {
    open: true
  };

  onClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.appFrame}>
        <PrimaryAppBar toggle={this.onClick} toggled={this.state.open} />

        <ConnectedSidebar toggle={this.onClick} toggled={this.state.open} />

        <main
          className={classNames(classes.content, classes.contentLeft, {
            [classes.contentShift]: this.state.open,
            [classes.contentShiftLeft]: this.state.open
          })}
        >
          <div className={classes.drawerHeader} />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Application);
