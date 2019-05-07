import * as React from 'react';
import styles from './AppBar.css';
import * as MaterialUI from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Search from '../../images/Search/Search';

const useStyles = makeStyles(styles);

const AppBar = () => {
  const classes = useStyles();

  return (
    <MaterialUI.AppBar
      position="static"
      color="inherit"
      className={classes.appbar}
    >
      <MaterialUI.Toolbar className={classes.toolbar}>
        <Search />
      </MaterialUI.Toolbar>
    </MaterialUI.AppBar>
  );
};

export default AppBar;
