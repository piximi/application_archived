import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FolderOpen from '@material-ui/icons/FolderOpen';
import CropOriginal from '@material-ui/icons/CropOriginal';
import { useTranslation } from 'react-i18next';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5'
  }
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center'
    }}
    {...props}
  />
));

export default function CustomizedMenus() {
  const { t: translation } = useTranslation();

  const inputElFolder = React.useRef<HTMLInputElement>(null);

  const inputElFile = React.useRef<HTMLInputElement>(null);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickInput = (event: any) => {
    if (inputElFolder.current) {
      console.log('folder');
      inputElFolder.current.click();
    }
    if (inputElFile.current) {
      console.log('file');
      inputElFile.current.click();
    }
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="inherit"
        onClick={handleClick}
      >
        {translation('Import images')}
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClickInput}>
          <ListItemIcon>
            <FolderOpen fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Open Folder" />
          <input
            ref={inputElFolder}
            type="file"
            accept={'image/*'}
            onChange={() => console.log('Hello World')}
            style={{ display: 'none' }}
            multiple
          />
        </MenuItem>
        <MenuItem onClick={handleClickInput}>
          <ListItemIcon>
            <CropOriginal fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Open File" />
          <input
            ref={inputElFolder}
            type="file"
            accept={'image/*'}
            onChange={() => console.log('Hello World')}
            style={{ display: 'none' }}
            multiple
          />
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
