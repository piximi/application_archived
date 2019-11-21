import React, { useState } from 'react';
import hash from 'string-hash';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FolderOpen from '@material-ui/icons/FolderOpen';
import CropOriginal from '@material-ui/icons/CropOriginal';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import styles from './ImportImagesButton.css';

const useStyles = makeStyles(styles);

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

export function ImportImagesButton(props: any) {
  const { createImages } = props;
  const { t: translation } = useTranslation();
  const classes = useStyles({});
  const inputElFolder = React.useRef<HTMLInputElement>(null);
  const inputElFile = React.useRef<HTMLInputElement>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [reading, setReading] = useState(false);

  type imageProps = {
    checksum: string;
    data: string;
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickInputFolder = (event: any) => {
    if (inputElFolder.current) {
      inputElFolder.current.click();
    }
    handleClose();
  };

  const handleClickInputFile = (event: any) => {
    if (inputElFile.current) {
      inputElFile.current.click();
    }
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onInputChange = (event: any) => {
    const files = event.target.files;
    const imageProps: imageProps[] = [];
    setReading(true);
    let counter = 0;
    for (const file of files) {
      const reader: FileReader = new FileReader();
      reader.onload = (reader: any) => {
        const data = reader.target.result as string;
        const checksum = String(hash(data as string));
        imageProps.push({ checksum, data });
        counter += 1;
        if (counter === files.length) {
          setReading(false);
          createImages(imageProps);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // prettier-ignore
  //@ts-ignore
  const inputElement = <input ref={inputElFolder} type="file" onChange={onInputChange} directory="" webkitdirectory="" style={{ display: 'none' }} />

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="text"
        color="inherit"
        onClick={handleClick}
      >
        {reading ? (
          <div style={{ paddingRight: '12px' }}>
            <CircularProgress size={24} />
          </div>
        ) : (
          <AddPhotoAlternateIcon className={classes.icon} />
        )}
        {translation('Import images')}
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClickInputFolder}>
          <ListItemIcon>
            <FolderOpen fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Open Folder" />
          {inputElement}
        </MenuItem>
        <MenuItem onClick={handleClickInputFile}>
          <ListItemIcon>
            <CropOriginal fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Open File" />
          <input
            ref={inputElFile}
            type="file"
            accept={'image/*'}
            onChange={onInputChange}
            style={{ display: 'none' }}
            multiple
          />
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
