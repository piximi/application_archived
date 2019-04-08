import React, { useState } from 'react';
import styles from './SidebarSaveListItem.css';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import json2csv from 'json2csv';
import fileDownload from 'js-file-download';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popover from '@material-ui/core/Popover';
import { fields } from '../../../constants';
import SaveDialog from '../../Dialog/SaveDialog/SaveDialog';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

export default function SidebarSaveListItem(props) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(0);
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [defaultDialogText, setDefaultDialogText] = useState('');
  const [downloadFunction, setDownloadFunction] = useState(0);

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseSaveDialog = () => {
    setSaveDialogOpen(false);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const changeDefaultDialogText = event => {
    setDefaultDialogText(event.target.value);
  };

  const clickOnExportLabels = () => {
    let fileName = defaultDialogText;
    if (fileName.length === 0) fileName = 'labels.csv';
    if (fileName.split('.').pop() !== 'csv') fileName = fileName + '.csv';
    const Json2csvParser = json2csv.Parser;
    const json2csvParser = new Json2csvParser({ fields });
    const csv = json2csvParser.parse(Object.values(props.images));
    fileDownload(csv, fileName);
  };

  const clickOnExportProject = () => {
    let fileName = defaultDialogText;
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

  return (
    <React.Fragment>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <SaveIcon />
        </ListItemIcon>
        <ListItemText inset primary="Save" />
      </ListItem>
      <Popover
        id="simple-popper"
        open={open}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={{
          top: open ? anchorEl.getBoundingClientRect().bottom - 3 : 0,
          left: open ? anchorEl.getBoundingClientRect().left + 14 : 0
        }}
      >
        <Paper>
          <MenuList>
            <MenuItem
              onClick={() => {
                handleClose();
                setSaveDialogOpen(true);
                setDownloadFunction(clickOnExportProject);
                setDefaultDialogText('MyProject.cyto');
              }}
              className={classes.menuItem}
            >
              <ListItemText
                classes={{ primary: classes.primary }}
                primary="Save Project (.cyto)"
              />
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                setSaveDialogOpen(true);
                setDownloadFunction(clickOnExportLabels);
                setDefaultDialogText('labels.csv');
              }}
              className={classes.menuItem}
            >
              <ListItemText
                classes={{ primary: classes.primary }}
                primary="Save Labels (.csv)"
              />
            </MenuItem>
          </MenuList>
        </Paper>
      </Popover>
      {saveDialogOpen ? (
        <SaveDialog
          open={saveDialogOpen}
          download={downloadFunction}
          onClose={handleCloseSaveDialog}
          defaultDialogText={defaultDialogText}
          changeDefaultDialogText={changeDefaultDialogText}
        />
      ) : null}
    </React.Fragment>
  );
}
