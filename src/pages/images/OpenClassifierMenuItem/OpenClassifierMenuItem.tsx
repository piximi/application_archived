import * as React from 'react';
import * as MaterialUI from '@material-ui/core';

const OpenClassifierMenuItem = (props: any) => {
  const { closeMenu, openClassifier } = props;

  const onChange = (e: any) => {
    const reader = new FileReader();

    reader.readAsText(e.target.files[0], 'UTF-8');

    reader.onload = e => {
      const target = e.target as FileReader;

      const classifier = JSON.parse(target.result as string);

      openClassifier(classifier.categories, classifier.images, classifier.name);
    };
    closeMenu();
  };

  return (
    <React.Fragment>
      <input
        accept=".piximi"
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
