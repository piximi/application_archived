import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import styles from './Application.css';
import { AppBar, IconButton, Toolbar, Typography } from 'material-ui';
import classNames from 'classnames';
import MenuIcon from '@material-ui/icons/Menu';
import ConnectedSidebar from '../../containers/ConnectedSidebar';
import ColorPicker from '../ColorPicker/ColorPicker';

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
        <AppBar
          className={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open,
            [classes.appBarShiftLeft]: this.state.open
          })}
          color="default"
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              aria-label="open drawer"
              className={classNames(
                classes.menuButton,
                this.state.open && classes.hide
              )}
              color="inherit"
              onClick={this.onClick}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="title" color="inherit">
              Cyto
            </Typography>
          </Toolbar>
        </AppBar>

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
