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

class Save extends Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null
    };
  }

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  clickOnExportLabels = () => {
    const Json2csvParser = json2csv.Parser;
    const json2csvParser = new Json2csvParser({ fields });
    const csv = json2csvParser.parse(this.props.images);
    fileDownload(csv, 'labels.csv');
  };

  clickOnExportProject = () => {
    console.log(this.props.images);
    const exportObject = {
      images: this.props.images,
      categories: this.props.categories,
      settings: this.props.settings
    };
    const json = JSON.stringify(exportObject, null, '\t');
    fileDownload(json, 'myProject.cyto');
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
                  this.clickOnExportProject();
                }}
                className={classes.menuItem}
              >
                <ListItemText
                  classes={{ primary: classes.primary }}
                  primary="Save Project"
                />
              </MenuItem>
              <MenuItem
                onClick={() => {
                  this.handleClose();
                  this.clickOnExportLabels();
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
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Save);
