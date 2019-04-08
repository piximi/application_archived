import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import React from 'react';
import styles from './SidebarDrawer.css';
import ConnectedCategories from '../../../containers/ConnectedCategories';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import SidebarSaveListItem from '../SidebarSaveListItem/SidebarSaveListItem';
import SidebarAppBar from '../SidebarAppBar/SidebarAppBar';
import SidebarModelList from '../SidebarModelList/SidebarModelList';
import SettingsListItem from '../SidebarSettingsListItem/SidebarSettingsListItem';
import SidebarOpenSampleListItem from '../SidebarOpenSampleListItem/SidebarOpenSampleListItem';
import HelpListItem from '../SidebarHelpListItem/SidebarHelpListItem';
import { makeStyles } from '@material-ui/styles';
import SidebarSendFeedbackListItem from '../SidebarSendFeedbackListItem/SidebarSendFeedbackListItem';

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

export default function SidebarDrawer(props) {
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

        <SidebarOpenSampleListItem loadDemoProject={loadDemoProject} />

        <SidebarSaveListItem images={images} categories={categories} />
      </List>

      <Divider />

      <ConnectedCategories setUnlabelledVisibility={setUnlabelledVisibility} />

      <Divider />

      <SidebarModelList categories={categories} images={images} />

      <Divider />

      <List dense>
        <SettingsListItem />

        <SidebarSendFeedbackListItem />

        <HelpListItem />
      </List>
    </Drawer>
  );
}
