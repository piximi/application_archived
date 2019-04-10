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
import useMenu from '../../../hooks/Menu';
import useDialog from '../../../hooks/Dialog';

const useStyles = makeStyles(styles);

export default function SidebarSaveListItem(props) {
  const classes = useStyles();

  const { anchorEl, openMenu, closeMenu } = useMenu();
  const { openedDialog, openDialog, closeDialog } = useDialog();

  const [defaultDialogText, setDefaultDialogText] = useState('');
  const [downloadFunction, setDownloadFunction] = useState(0);

  const open = Boolean(anchorEl);

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
      <ListItem button onClick={openMenu}>
        <ListItemIcon>
          <SaveIcon />
        </ListItemIcon>
        <ListItemText inset primary="Save" />
      </ListItem>
      <Popover
        id="simple-popper"
        open={open}
        onClose={closeMenu}
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
                closeMenu();
                openDialog();
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
                closeMenu();
                openDialog();
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

      <SaveDialog
        open={openedDialog}
        download={downloadFunction}
        onClose={closeDialog}
        defaultDialogText={defaultDialogText}
        changeDefaultDialogText={changeDefaultDialogText}
      />
    </React.Fragment>
  );
}
