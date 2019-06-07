import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import * as React from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useCollapseList } from '@piximi/hooks';
import {
  ConnectedSidebarClassifierEvaluateListItem,
  ConnectedSidebarClassifierFitListItem
} from '../../../containers';

const SidebarClassifierList = () => {
  const { collapsedList, collapseList } = useCollapseList();

  return (
    <List dense>
      <ListItem button onClick={collapseList}>
        <ListItemIcon>
          {!collapsedList ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemIcon>

        <ListItemText inset primary="Classifier" />
      </ListItem>

      <Collapse in={!collapsedList} timeout="auto" unmountOnExit>
        <ConnectedSidebarClassifierFitListItem />

        <ConnectedSidebarClassifierEvaluateListItem />
      </Collapse>
    </List>
  );
};

export default SidebarClassifierList;
