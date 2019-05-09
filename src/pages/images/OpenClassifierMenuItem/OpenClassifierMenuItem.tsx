import * as React from 'react';
import * as MaterialUI from '@material-ui/core';

const OpenClassifierMenuItem = (props: any) => {
  const { closeMenu } = props;

  const onChange = (e: any) => {
    const reader = new FileReader();

    reader.onload = function(e) {
      // const text = reader.result;
      // const data = JSON.parse(text);
      // props.updateStore(data);
    };

    // reader.readAsText(e.target.files[0]);

    closeMenu();
  };

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
