import * as React from 'react';
import * as MaterialUI from '@material-ui/core';
import { OpenWeightsMenuItem } from '..';
import {
  ConnectedOpenClassifierMenuItem,
  ConnectedOpenExampleClassifierDialog
} from '../../../containers';
import { useDialog } from '@piximi/hooks';

type Props = {
  anchorEl: any;
  closeMenu: () => void;
  openedMenu: boolean;
};

const OpenMenuList = (props: Props) => {
  const { anchorEl, closeMenu, openedMenu } = props;

  const anchorPosition = {
    top: openedMenu ? anchorEl.getBoundingClientRect().bottom - 3 : 0,
    left: openedMenu ? anchorEl.getBoundingClientRect().left + 14 : 0
  };

  const {
    openedDialog: openedOpenExampleClassifierDialog,
    openDialog: openOpenExampleClassifierDialog,
    closeDialog: closeOpenExampleClassifierDialog
  } = useDialog();

  const onOpenExampleClassifierClick = () => {
    openOpenExampleClassifierDialog();

    closeMenu();
  };

  return (
    <React.Fragment>
      <MaterialUI.Popover
        anchorPosition={anchorPosition}
        anchorReference="anchorPosition"
        onClose={closeMenu}
        open={openedMenu}
      >
        <MaterialUI.Paper>
          <MaterialUI.MenuList dense>
            <ConnectedOpenClassifierMenuItem closeMenu={closeMenu} />

            <MaterialUI.Divider />

            <MaterialUI.MenuItem onClick={onOpenExampleClassifierClick}>
              <MaterialUI.ListItemText primary="Open example classifier" />
            </MaterialUI.MenuItem>

            <OpenWeightsMenuItem closeMenu={closeMenu} />
          </MaterialUI.MenuList>
        </MaterialUI.Paper>
      </MaterialUI.Popover>
      <ConnectedOpenExampleClassifierDialog
        onClose={closeOpenExampleClassifierDialog}
        open={openedOpenExampleClassifierDialog}
      />
    </React.Fragment>
  );
};

export default OpenMenuList;
