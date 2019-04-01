import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function RenderPropsMenu() {
  return (
    <React.Fragment>
      <Menu
        id="render-props-menu"
        anchorEl={this.props.anchorEl}
        open={this.props.open}
        onClose={e => console.log(true)}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default RenderPropsMenu;
