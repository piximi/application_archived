import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';

function readDataFromCytoFile(e, props) {
  const reader = new FileReader();

  reader.onload = function(e) {
    const text = reader.result;
    const data = JSON.parse(text);
    props.updateStore(data);
  };

  reader.readAsText(e.target.files[0]);
}

export default function SidebarOpenProjectListItem(props) {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
