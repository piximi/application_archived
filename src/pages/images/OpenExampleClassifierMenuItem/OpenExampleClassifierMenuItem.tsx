import * as React from 'react';
import * as MaterialUI from '@material-ui/core';
import { useDialog } from '../../../hooks';
import { OpenExampleClassifierDialog } from '../index';

type Props = {
  closeMenu: () => void;
};

const OpenExampleClassifierMenuItem = (props: Props) => {
  const { closeMenu } = props;

  const { openedDialog, openDialog, closeDialog } = useDialog();

  const onClick = () => {
    openDialog();

    closeMenu();
  };

  return (
    <React.Fragment>
      <MaterialUI.MenuItem onClick={onClick}>
        <MaterialUI.ListItemText primary="Open example classifier" />
      </MaterialUI.MenuItem>

      <OpenExampleClassifierDialog onClose={closeDialog} open={openedDialog} />
    </React.Fragment>
  );
};

export default OpenExampleClassifierMenuItem;
