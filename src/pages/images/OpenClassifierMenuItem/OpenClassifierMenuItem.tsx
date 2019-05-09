import * as React from 'react';
import * as MaterialUI from '@material-ui/core';

const OpenClassifierMenuItem = (props: any) => {
  const { onChange } = props;

  return (
    <React.Fragment>
      <input
        accept=".cyto"
        id="open-classifier"
        name="file"
        onChange={onChange}
        style={{ display: 'none' }}
        type="file"
      />

      <label htmlFor="open-classifier">
        <MaterialUI.MenuItem>
          <MaterialUI.ListItemText primary="Open classifier" />
        </MaterialUI.MenuItem>
      </label>
    </React.Fragment>
  );
};

export default OpenClassifierMenuItem;
