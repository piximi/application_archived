import {
  Collapse,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from 'material-ui';
import React, { Component } from 'react';
import styles from '../Primary/Primary.css';
import { withStyles } from 'material-ui/styles/index';
import ConnectedCategories from '../../containers/ConnectedCategories';
import ConnectedSettingsDialog from '../../containers/ConnectedSettingsDialog';
import HelpDialog from '../HelpDialog/HelpDialog';
import SettingsIcon from '@material-ui/icons/Settings';
import FeedbackIcon from '@material-ui/icons/Feedback';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import HelpIcon from '@material-ui/icons/Help';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SaveIcon from '@material-ui/icons/Save';
import * as API from '../../classifier';
import Download from '@axetroy/react-download';
import SendFeedbackDialog from '../SendFeedbackDialog/SendFeedbackDialog';

const onClick = (images, categories) => {
  return API.trainOnRun(images, categories);
};

class Sidebar extends Component {
  state = {
    helpDialogOpen: false,
    sendFeedbackDialogOpen: false,
    settingsDialogOpen: false
  };

  closeHelpDialog = () => {
    this.setState({
      helpDialogOpen: false
    });
  };

  closeSendFeedbackDialog = () => {
    this.setState({
      sendFeedbackDialogOpen: false
    });
  };

  closeSettingsDialog = () => {
    this.setState({
      settingsDialogOpen: false
    });
  };

  openHelpDialog = () => {
    this.setState({
      helpDialogOpen: true
    });
  };

  openSendFeedbackDialog = () => {
    this.setState({
      sendFeedbackDialogOpen: true
    });
  };

  openSettingsDialog = () => {
    this.setState({
      settingsDialogOpen: true
    });
  };

  render() {
    const {
      categories,
      classes,
      closeSettingsDialog,
      images,
      open,
      openSettingsDialog,
      save,
      settings,
      toggleHelpDialog,
      toggleModelCollapse,
      toggleSettingsDialog
    } = this.props;

    const exportObject = {
      settings: settings,
      categories: categories,
      images: images.images
    };

    return (
      <Grid item xs={2}>
        <Drawer
          anchor="left"
          classes={{ paper: classes.drawerPaper }}
          open={settings.sidebar.open}
          variant="permanent"
        >
          <div className={classes.toolbar} />

          <List dense>
            <ListItem button component="label">
              <ListItemIcon>
                <FolderOpenIcon />
              </ListItemIcon>
              <ListItemText inset primary="Open..." />

              <input
                style={{ display: 'none' }}
                type="file"
                accept=".cyto"
                name="file"
                id="file"
                onChange={e => open(e.target.files)}
              />
            </ListItem>

            <Download
              file="example.cyto"
              content={JSON.stringify(exportObject, null, '\t')}
            >
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
            <ListItem button onClick={toggleModelCollapse}>
              <ListItemIcon>
                {!settings.model.collapsed ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                )}
              </ListItemIcon>

              <ListItemText inset primary="Model" />
            </ListItem>

            <Collapse
              in={!settings.model.collapsed}
              timeout="auto"
              unmountOnExit
            >
              <ListItem
                dense
                button
                onClick={() => onClick(images, categories)}
              >
                <ListItemIcon>
                  <PlayCircleOutlineIcon />
                </ListItemIcon>

                <ListItemText primary="Fit" />
              </ListItem>
            </Collapse>
          </List>

          <Divider />

          <List dense>
            <ListItem dense button onClick={this.openSettingsDialog}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>

              <ListItemText primary="Settings" />
            </ListItem>

            <ListItem dense button onClick={this.openSendFeedbackDialog}>
              <ListItemIcon>
                <FeedbackIcon />
              </ListItemIcon>

              <ListItemText primary="Send feedback" />
            </ListItem>

            <ListItem dense button onClick={this.openHelpDialog}>
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>

              <ListItemText primary="Help" />
            </ListItem>
          </List>

          <ConnectedSettingsDialog
            onClose={this.closeSettingsDialog}
            open={this.state.settingsDialogOpen}
          />

          <SendFeedbackDialog
            onClose={this.closeSendFeedbackDialog}
            open={this.state.sendFeedbackDialogOpen}
          />

          <HelpDialog
            onClose={this.closeHelpDialog}
            open={this.state.helpDialogOpen}
          />
        </Drawer>
      </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Sidebar);
