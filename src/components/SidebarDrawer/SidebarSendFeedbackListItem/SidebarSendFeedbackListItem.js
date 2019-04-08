import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react';
import FeedbackIcon from '@material-ui/icons/Feedback';

function SidebarSendFeedbackListItem() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default React.memo(SidebarSendFeedbackListItem);
