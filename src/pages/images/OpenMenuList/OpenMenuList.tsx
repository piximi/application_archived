import * as React from 'react';
import * as MaterialUI from '@material-ui/core';
import {
  OpenClassifierMenuItem,
  OpenExampleClassifierMenuItem,
  OpenWeightsMenuItem
} from '..';

type Props = {
  anchorEl: any;
  onClose: () => void;
  open: boolean;
};

const OpenMenuList = (props: Props) => {
  const { anchorEl, onClose, open } = props;

  const anchorPosition = {
    top: open ? anchorEl.getBoundingClientRect().bottom - 3 : 0,
    left: open ? anchorEl.getBoundingClientRect().left + 14 : 0
  };

  return (
    <MaterialUI.Popover
      anchorPosition={anchorPosition}
      anchorReference="anchorPosition"
      onClose={onClose}
      open={open}
    >
      <MaterialUI.Paper>
        <MaterialUI.MenuList dense>
          <OpenClassifierMenuItem closeMenu={onClose} />

          <MaterialUI.Divider />

          <OpenExampleClassifierMenuItem closeMenu={onClose} />

          <OpenWeightsMenuItem closeMenu={onClose} />
        </MaterialUI.MenuList>
      </MaterialUI.Paper>
    </MaterialUI.Popover>
  );
};

export default OpenMenuList;
