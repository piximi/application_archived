import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import React from 'react';
import styles from './Sidebar.css';
import { withStyles } from '@material-ui/core/styles';
import ConnectedCategories from '../../containers/ConnectedCategories';
import FeedbackIcon from '@material-ui/icons/Feedback';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import Save from '../Save/Save';
import SidebarAppBar from '../SidebarAppBar/SidebarAppBar';
import ModelList from '../ModelList/ModelList';
import SettingsListItem from '../SettingsListItem/SettingsListItem';
import OpenSampleListItem from '../OpenSampleListItem/OpenSampleListItem';
import HelpListItem from '../HelpListItem/HelpListItem';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

function readDataFromCytoFile(e, props) {
  const reader = new FileReader();

  reader.onload = function(e) {
    const text = reader.result;
    const data = JSON.parse(text);
    props.updateStore(data);
  };

  reader.readAsText(e.target.files[0]);
}

function Sidebar(props) {
  const classes = useStyles();

  const {
    categories,
    images,
    setUnlabelledVisibility,
    toggled,
    toggle,
    loadDemoProject
  } = props;

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawerPaper }}
      open={toggled}
      variant="persistent"
    >
      <div className={classes.drawerHeader} />

      <SidebarAppBar toggle={toggle} toggled={toggled} />

      <List dense>
        <input
          style={{ display: 'none' }}
          type="file"
          accept=".cyto"
          name="file"
          id="open-project"
          onChange={e => readDataFromCytoFile(e, props)}
        />
        <label htmlFor="open-project">
          <ListItem dense button>
            <ListItemIcon>
              <FolderOpenIcon />
            </ListItemIcon>
            <ListItemText inset primary="Open .cyto" />
          </ListItem>
        </label>

        <OpenSampleListItem loadDemoProject={loadDemoProject} />

        <Save images={images} categories={categories} />
      </List>

      <Divider />

      <ConnectedCategories setUnlabelledVisibility={setUnlabelledVisibility} />

      <Divider />

      <ModelList categories={categories} images={images} />

      <Divider />

      <List dense>
        <SettingsListItem />

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

        <HelpListItem />
      </List>
    </Drawer>
  );
}

export default withStyles(styles, { withTheme: true })(Sidebar);
