import * as React from 'react';
import {
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import json2csv from 'json2csv';
import fileDownload from 'js-file-download';
import MenuItem from '@material-ui/core/MenuItem/index';
import MenuList from '@material-ui/core/MenuList/index';
import Paper from '@material-ui/core/Paper/index';
import Popover from '@material-ui/core/Popover/index';
import { fields } from '../../../constants';
import { SaveDialog } from '..';
import { useDialog, useMenu } from '../../../hooks';
import * as API from '../../../classifierBackup';

const SidebarSaveListItem = props => {
  const { anchorEl, openedMenu, openMenu, closeMenu } = useMenu();
  const { openedDialog, openDialog, closeDialog } = useDialog();
  const [defaultDialogText, setDefaultDialogText] = React.useState('');
  const [downloadFunction, setDownloadFunction] = React.useState(0);

  const changeDefaultDialogText = event => {
    setDefaultDialogText(event.target.value);
  };

  const clickOnExportLabels = fileName => {
    if (fileName.length === 0) fileName = 'labels.csv';
    if (fileName.split('.').pop() !== 'csv') fileName = fileName + '.csv';
    const Json2csvParser = json2csv.Parser;
    const json2csvParser = new Json2csvParser({ fields });
    const csv = json2csvParser.parse(Object.values(props.images));
    fileDownload(csv, fileName);
  };

  const clickOnExportProject = fileName => {
    if (fileName.length === 0) fileName = 'MyProject.cyto';
    if (fileName.split('.').pop() !== 'cyto') fileName = fileName + '.cyto';
    let categories = [...props.categories];
    categories.shift();
    const exportObject = {
      images: props.images,
      categories: categories,
      settings: props.settings
    };
    const json = JSON.stringify(exportObject, null, '\t');
    fileDownload(json, fileName);
  };

  const openFileNameEditor = defaultFileName => {
    setDefaultDialogText(defaultFileName);
    closeMenu();
    openDialog();
  };

  const saveAnnotationsAndPredictions = fileName => {
    setDownloadFunction(clickOnExportLabels(fileName));
  };

  const saveClassifier = fileName => {
    setDownloadFunction(clickOnExportProject(fileName));
  };

  const saveWeights = () => {
    API.exportWeights();
  };

  const anchorPosition = {
    top: openedMenu ? anchorEl.getBoundingClientRect().bottom - 3 : 0,
    left: openedMenu ? anchorEl.getBoundingClientRect().left + 14 : 0
  };

  return (
    <React.Fragment>
      <ListItem button onClick={openMenu}>
        <ListItemIcon>
          <SaveIcon />
        </ListItemIcon>
        <ListItemText inset primary="Save" />
      </ListItem>
      <Popover
        anchorPosition={anchorPosition}
        anchorReference="anchorPosition"
        onClose={closeMenu}
        open={openedMenu}
      >
        <Paper>
          <MenuList dense>
            <MenuItem
              onClick={() => {
                openFileNameEditor('MyProject.cyto');
                setDownloadFunction(fileName => saveClassifier);
              }}
            >
              <ListItemText primary="Save classifier" />
            </MenuItem>

            <Divider />

            <MenuItem
              onClick={() => {
                openFileNameEditor('labels.csv');
                setDownloadFunction(fileName => saveAnnotationsAndPredictions);
              }}
            >
              <ListItemText primary="Save annotations and predictions" />
            </MenuItem>

            <MenuItem onClick={saveWeights}>
              <ListItemText primary="Save weights" />
            </MenuItem>
          </MenuList>
        </Paper>
      </Popover>
      <SaveDialog
        open={openedDialog}
        download={downloadFunction}
        onClose={closeDialog}
        defaultDialogText={defaultDialogText}
        changeDefaultDialogText={changeDefaultDialogText}
      />
    </React.Fragment>
  );
};

export default SidebarSaveListItem;
