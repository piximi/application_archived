import * as React from 'react';
import * as MaterialUI from '@material-ui/core';
import {
  SaveAnnotationsAndPredictionsMenuItem,
  SaveClassifierMenuItem,
  SaveWeightsMenuItem
} from '..';

type Props = {
  anchorEl: any;
  onClose: () => void;
  open: boolean;
};

const SaveMenuList = (props: Props) => {
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
          <SaveClassifierMenuItem />

          <MaterialUI.Divider />

          <SaveAnnotationsAndPredictionsMenuItem />

          <SaveWeightsMenuItem />
        </MaterialUI.MenuList>
      </MaterialUI.Paper>
    </MaterialUI.Popover>
  );
};

export default SaveMenuList;
