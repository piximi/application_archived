import {
  Collapse,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from 'material-ui';
import React, { Component } from 'react';
import styles from './Sidebar.css';
import { withStyles } from 'material-ui/styles/index';
import ConnectedCategories from '../../containers/ConnectedCategories';
import HelpDialog from '../HelpDialog/HelpDialog';
import SettingsIcon from '@material-ui/icons/Settings';
import FeedbackIcon from '@material-ui/icons/Feedback';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import HelpIcon from '@material-ui/icons/Help';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SaveIcon from '@material-ui/icons/Save';
import * as API from '../../classifier';
import Download from '@axetroy/react-download';
import SendFeedbackDialog from '../SendFeedbackDialog/SendFeedbackDialog';
import SettingsDialog from '../SettingsDialog/SettingsDialog';
import SidebarAppBar from '../SidebarAppBar/SidebarAppBar';

const onClick = (images, categories) => {
  return API.trainOnRun(images, categories);
};

class Sidebar extends Component {
  state = {
    helpDialogOpen: false,
    modelListCollapsed: false,
    sendFeedbackDialogOpen: false,
    settingsDialogOpen: false
  };

  readDataFromCytoFile = e => {
    const that = this;
    const reader = new FileReader();
    reader.onload = function(e) {
      const text = reader.result;
      const data = JSON.parse(text);
      that.props.updateStore(data);
    };
    reader.readAsText(e.target.files[0]);
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
      images,
      settings,
      toggleModelCollapse,
      toggled,
      toggle
    } = this.props;

    const exportObject = {
      settings: settings,
      categories: categories,
      images: images.images
    };

    return (
      <Drawer
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
        open={toggled}
        variant="persistent"
      >
        <div className={classes.drawerHeader} />

        <SidebarAppBar toggle={toggle} />

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
              onChange={e => this.readDataFromCytoFile(e)}
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

          <Collapse in={!settings.model.collapsed} timeout="auto" unmountOnExit>
            <ListItem dense button onClick={() => onClick(images, categories)}>
              <ListItemIcon>
                <PlayCircleOutlineIcon />
              </ListItemIcon>

              <ListItemText primary="Fit" />
            </ListItem>

            <ListItem dense button component="label">
              <ListItemIcon>
                <OpenInBrowserIcon />
              </ListItemIcon>

              <ListItemText primary="Import Weights" />

              <input
                style={{ display: 'none' }}
                type="file"
                accept="*"
                name="file"
                id="file"
                onChange={e => API.importWeights(e.target.files)}
              />
            </ListItem>

            <ListItem dense button onClick={() => API.exportWeights()}>
              <ListItemIcon>
                <SaveIcon />
              </ListItemIcon>

              <ListItemText primary="Save Weights" />
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

          <ListItem
            button
            component="a"
            href="https://docs.google.com/forms/d/e/1FAIpQLScAAydUXdfxxdjdkVpTJBXvZ2cGZblTRYHlcLEjfbTQsgoUug/viewform?usp=sf_link"
          >
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

        <SettingsDialog
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
    );
  }
}

export default withStyles(styles, { withTheme: true })(Sidebar);
