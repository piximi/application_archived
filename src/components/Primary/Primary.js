import { AppBar, IconButton, Toolbar, Typography } from 'material-ui';
import React from 'react';
import styles from './Primary.css';
import { withStyles } from 'material-ui/styles/index';
import MenuIcon from '@material-ui/icons/Menu';

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

        <Typography variant="title" color="inherit" className={classes.flex}>
          Cyto
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles, { withTheme: true })(Primary);
