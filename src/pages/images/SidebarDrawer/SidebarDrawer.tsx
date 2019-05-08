import { Divider, Drawer, List } from '@material-ui/core';
import * as React from 'react';
import styles from './SidebarDrawer.css';
import {
  ConnectedCategories,
  ConnectedSidebarSaveListItem
} from '../../../containers';
import {
  SidebarAppBar,
  SidebarHelpListItem,
  SidebarClassifierList,
  SidebarNewClassifierListItem,
  SidebarOpenListItem,
  SidebarSendFeedbackListItem,
  SidebarSettingsListItem
} from '..';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

const SidebarDrawer = (props: any) => {
  const classes = useStyles();

  const {
    setUnlabelledVisibility,
    toggled,
    toggle,
    loadDemoProject,
    updateStore
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
        <SidebarNewClassifierListItem />

        <SidebarOpenListItem
          updateStore={updateStore}
          loadDemoProject={loadDemoProject}
        />

        <ConnectedSidebarSaveListItem />
      </List>

      <Divider />

      <ConnectedCategories setUnlabelledVisibility={setUnlabelledVisibility} />

      <Divider />

      <SidebarClassifierList />

      <Divider />

      <List dense>
        <SidebarSettingsListItem />

        <SidebarSendFeedbackListItem />

        <SidebarHelpListItem />
      </List>
    </Drawer>
  );
};

export default SidebarDrawer;
