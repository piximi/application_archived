import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import FeedbackIcon from '@material-ui/icons/Feedback';

const SidebarSendFeedbackListItem = () => (
  <React.Fragment>
    <ListItem button disabled>
      <ListItemIcon>
        <FeedbackIcon />
      </ListItemIcon>

      <ListItemText primary="Send feedback" />
    </ListItem>
  </React.Fragment>
);

export default SidebarSendFeedbackListItem;
