import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import * as React from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import * as API from '../../../classifier';
import useSnackbar from '../../../hooks/Snackbar';
import TrainingSnackbar from '../../Snackbar/TrainingSnackbar/TrainingSnackbar';
import useCollapseList from '../../../hooks/CollapseList';

const SidebarModelList = (props: { categories: any; images: any; }) => {
  const { collapsedList, collapseList } = useCollapseList();

  const { openedSnackbar, openSnackbar, closeSnackbar } = useSnackbar();

  const run = () => {
    openSnackbar();

    API.fitAndPredict(images, categories);
  };

  const { categories, images } = props;

  return (
    <List dense>
      <ListItem button onClick={collapseList}>
        <ListItemIcon>
          {!collapsedList ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemIcon>

        <ListItemText inset primary="Model" />
      </ListItem>

      <Collapse in={!collapsedList} timeout="auto" unmountOnExit>
        <ListItem dense button onClick={run}>
          <ListItemIcon>
            <PlayCircleOutlineIcon />
          </ListItemIcon>

          <ListItemText primary="Run Classifier" />

          <TrainingSnackbar onClose={closeSnackbar} open={openedSnackbar} />
        </ListItem>
      </Collapse>
    </List>
  );
};

export default SidebarModelList;
