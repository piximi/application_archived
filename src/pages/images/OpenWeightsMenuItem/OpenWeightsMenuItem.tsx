import * as React from 'react';
import * as MaterialUI from '@material-ui/core';

const OpenWeightsMenuItem = (props: any) => {
  const { closeMenu } = props;

  const onChange = () => {};

  const onClick = () => {
    closeMenu();
  };

  return (
    <React.Fragment>
      <input
        accept="*"
        id="open-weights"
        name="file"
        onChange={onChange}
        style={{ display: 'none' }}
        type="file"
      />

      <label htmlFor="open-weights">
        <MaterialUI.MenuItem onClick={onClick}>
          <MaterialUI.ListItemText primary="Open weights" />
        </MaterialUI.MenuItem>
      </label>
    </React.Fragment>
  );
};

export default OpenWeightsMenuItem;
