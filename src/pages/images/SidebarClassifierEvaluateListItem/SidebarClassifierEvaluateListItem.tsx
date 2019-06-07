import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import BarChartIcon from '@material-ui/icons/BarChart';
import { useTranslation } from 'react-i18next';

const SidebarClassifierEvaluateListItem = (props: any) => {
  const { categories, images } = props;

  const { t: translation } = useTranslation();

  const evaluate = async () => {};

  return (
    <React.Fragment>
      <ListItem button dense onClick={evaluate}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>

        <ListItemText primary={translation('Evaluate')} />
      </ListItem>
    </React.Fragment>
  );
};

export default SidebarClassifierEvaluateListItem;
