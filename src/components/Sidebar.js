import {
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar
} from 'material-ui';
import React from 'react';
import styles from './Primary.css';
import { withStyles } from 'material-ui/styles/index';
import ConnectedCategories from '../containers/ConnectedCategories';
import SettingsIcon from '@material-ui/icons/Settings';
import FeedbackIcon from '@material-ui/icons/Feedback';
import HelpIcon from '@material-ui/icons/Help';

const Sidebar = ({ classes }) => {
  return (
    <Grid item xs={2}>
      <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent">
        <div className={classes.toolbar} />

        <Toolbar />

        <Divider />

        <ConnectedCategories />

        <Divider />

        <List dense>
          <ListItem dense button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>

            <ListItemText primary="Settings" />
          </ListItem>

          <ListItem dense button>
            <ListItemIcon>
              <FeedbackIcon />
            </ListItemIcon>

            <ListItemText primary="Send feedback" />
          </ListItem>

          <ListItem dense button>
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>

            <ListItemText primary="Help" />
          </ListItem>
        </List>
      </Drawer>
    </Grid>
  );
};

export default withStyles(styles)(Sidebar);
