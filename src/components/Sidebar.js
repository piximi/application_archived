import {
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from 'material-ui';
import React from 'react';
import styles from './Primary.css';
import { withStyles } from 'material-ui/styles/index';
import ConnectedCategories from '../containers/ConnectedCategories';
import Settings from './Settings';
import HelpDialog from './HelpDialog';
import SettingsIcon from '@material-ui/icons/Settings';
import FeedbackIcon from '@material-ui/icons/Feedback';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import HelpIcon from '@material-ui/icons/Help';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SaveIcon from '@material-ui/icons/Save';
import * as API from '../classifier';
import Download from '@axetroy/react-download';

const onClick = () => {
  return API.trainOnRun({});
};

const Sidebar = ({
  open,
  settings,
  closeSettingsDialog,
  openSettingsDialog,
  openHelpDialog,
  toggleHelpDialog,
  save,
  classes
}) => {
  return (
    <Grid item xs={2}>
      <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent">
        <div className={classes.toolbar} />

        <List dense>
          <ListItem button onClick={open}>
            <ListItemIcon>
              <FolderOpenIcon />
            </ListItemIcon>

            <ListItemText inset primary="Open..." />
          </ListItem>

          <Download file="example.cyto" content={JSON.stringify({})}>
            <ListItem button>
              <ListItemIcon>
                <SaveIcon />
              </ListItemIcon>

              <ListItemText inset primary="Save" />
            </ListItem>
          </Download>
        </List>

        <Divider />

        <ConnectedCategories />

        <Divider />

        <List dense>
          <ListItem button>
            <ListItemIcon>
              <ExpandLessIcon />
            </ListItemIcon>

            <ListItemText inset primary="Model" />
          </ListItem>

          <ListItem dense button onClick={onClick}>
            <ListItemIcon>
              <PlayCircleOutlineIcon />
            </ListItemIcon>

            <ListItemText primary="Fit" />
          </ListItem>
        </List>

        <Divider />

        <List dense>
          <ListItem dense button onClick={openSettingsDialog}>
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

          <ListItem dense button onClick={toggleHelpDialog}>
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>

            <ListItemText primary="Help" />
          </ListItem>
        </List>

        <Settings onClose={closeSettingsDialog} open={settings.settings.open} />

        <HelpDialog onClose={toggleHelpDialog} open={settings.help.open} />
      </Drawer>
    </Grid>
  );
};

export default withStyles(styles)(Sidebar);
