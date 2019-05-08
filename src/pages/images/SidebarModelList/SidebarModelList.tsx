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
import { useCollapseList } from '../../../hooks';
import SidebarModelFitListItem from '../SidebarModelFitListItem/SidebarModelFitListItem';

const SidebarModelList = (props: { categories: any; images: any }) => {
  const { collapsedList, collapseList } = useCollapseList();

  const { categories, images } = props;

  return (
    <List dense>
      <ListItem button onClick={collapseList}>
        <ListItemIcon>
          {!collapsedList ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemIcon>

        <ListItemText inset primary="Model" />
      </ListItem>

      <Collapse in={!collapsedList} timeout="auto" unmountOnExit>
        <SidebarModelFitListItem categories={categories} images={images} />
      </Collapse>
    </List>
  );
};

export default SidebarModelList;
