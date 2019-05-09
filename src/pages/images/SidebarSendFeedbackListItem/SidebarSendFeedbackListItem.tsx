import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import FeedbackIcon from '@material-ui/icons/Feedback';

const SidebarSendFeedbackListItem = () => (
  <div>
    <ListItem button disabled>
      <ListItemIcon>
        <FeedbackIcon />
      </ListItemIcon>

      <ListItemText primary="Send feedback" />
    </ListItem>
  </div>
);

export default SidebarSendFeedbackListItem;
