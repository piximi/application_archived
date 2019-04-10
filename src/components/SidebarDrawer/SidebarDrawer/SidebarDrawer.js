import { Divider, Drawer, List } from '@material-ui/core';
import React from 'react';
import styles from './SidebarDrawer.css';
import ConnectedCategories from '../../../containers/ConnectedCategories';
import SidebarSaveListItem from '../SidebarSaveListItem/SidebarSaveListItem';
import SidebarAppBar from '../SidebarAppBar/SidebarAppBar';
import SidebarModelList from '../SidebarModelList/SidebarModelList';
import SettingsListItem from '../SidebarSettingsListItem/SidebarSettingsListItem';
import SidebarOpenSampleListItem from '../SidebarOpenSampleListItem/SidebarOpenSampleListItem';
import HelpListItem from '../SidebarHelpListItem/SidebarHelpListItem';
import { makeStyles } from '@material-ui/styles';
import SidebarSendFeedbackListItem from '../SidebarSendFeedbackListItem/SidebarSendFeedbackListItem';
import SidebarOpenProjectListItem from '../SidebarOpenProjectListItem/SidebarOpenProjectListItem';
import SidebarNewListItem from '../SidebarNewListItem/SidebarNewListItem';

const useStyles = makeStyles(styles);

function SidebarDrawer(props) {
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
        <SidebarNewListItem />

        <SidebarOpenProjectListItem />

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

export default React.memo(SidebarDrawer);
