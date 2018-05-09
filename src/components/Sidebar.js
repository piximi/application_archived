import { Divider, Drawer, Grid, Toolbar } from 'material-ui';
import React from 'react';
import styles from './Primary.css';
import { withStyles } from 'material-ui/styles/index';
import ConnectedCategories from '../containers/ConnectedCategories';

const Sidebar = ({ classes }) => {
  return (
    <Grid item xs={2}>
      <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent">
        <div className={classes.toolbar} />

        <Toolbar />

        <Divider />

        <ConnectedCategories />
      </Drawer>
    </Grid>
  );
};

export default withStyles(styles)(Sidebar);
