import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './Primary.css';
import { withStyles } from '@material-ui/core/styles';

const Primary = ({
  classes,
  train,
  sortImages,
  upload,
  updateSettingSidebarOpen,
  toggleSidebar
}) => {
  return (
    <AppBar position="fixed" className={classes.appBar} color="default">
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={toggleSidebar}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" color="inherit" className={classes.flex}>
          Cyto
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles, { withTheme: true })(Primary);
