import React, { Component } from 'react';
import styles from './Save.css';
import { withStyles } from '@material-ui/core/styles';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import json2csv from 'json2csv';
import fileDownload from 'js-file-download';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popover from '@material-ui/core/Popover';
import { fields } from '../../constants';
import SaveDialog from '../SaveDialog/SaveDialog';

class Save extends Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null,
      saveDialogOpen: false,
      defaultDialogText: ''
    };
  }

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  handleCloseSaveDialog = () => {
    this.setState({
      saveDialogOpen: false
    });
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  changeDefaultDialogText = event => {
    this.setState({
      defaultDialogText: event.target.value
    });
  };

  clickOnExportLabels = () => {
    let fileName = this.state.defaultDialogText;
    if (fileName.length === 0) fileName = 'labels.csv';
    if (fileName.split('.').pop() !== 'csv') fileName = fileName + '.csv';
    const Json2csvParser = json2csv.Parser;
    const json2csvParser = new Json2csvParser({ fields });
    const csv = json2csvParser.parse(Object.values(this.props.images));
    fileDownload(csv, fileName);
  };

  clickOnExportProject = () => {
    let fileName = this.state.defaultDialogText;
    if (fileName.length === 0) fileName = 'MyProject.cyto';
    if (fileName.split('.').pop() !== 'cyto') fileName = fileName + '.cyto';
    let categories = [...this.props.categories];
    categories.shift();
    const exportObject = {
      images: this.props.images,
      categories: categories,
      settings: this.props.settings
    };
    const json = JSON.stringify(exportObject, null, '\t');
    fileDownload(json, fileName);
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <React.Fragment>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <SaveIcon />
          </ListItemIcon>
          <ListItemText inset primary="Save" />
        </ListItem>
        <Popover
          id="simple-popper"
          open={open}
          onClose={this.handleClose}
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
                  this.handleClose();
                  this.setState({
                    saveDialogOpen: true,
                    downloadFunction: this.clickOnExportProject,
                    defaultDialogText: 'MyProject.cyto'
                  });
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
                  this.handleClose();
                  this.setState({
                    saveDialogOpen: true,
                    downloadFunction: this.clickOnExportLabels,
                    defaultDialogText: 'labels.csv'
                  });
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
        {this.state.saveDialogOpen ? (
          <SaveDialog
            open={this.state.saveDialogOpen}
            download={this.state.downloadFunction}
            onClose={this.handleCloseSaveDialog}
            defaultDialogText={this.state.defaultDialogText}
            changeDefaultDialogText={this.changeDefaultDialogText}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Save);
