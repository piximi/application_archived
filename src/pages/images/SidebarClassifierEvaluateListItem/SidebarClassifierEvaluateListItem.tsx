import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import BarChartIcon from '@material-ui/icons/BarChart';
import { useTranslation } from 'react-i18next';
import { createDataset, createModel } from '../../../network';
import * as tensorflow from '@tensorflow/tfjs';
import { useState } from 'react';
import { Snackbar } from '@piximi/components';
import { useSnackbar } from '@piximi/hooks';

const SidebarClassifierEvaluateListItem = (props: any) => {
  const { categories, images } = props;

  const { openedSnackbar, openSnackbar, closeSnackbar } = useSnackbar();

  const [accuracy, setAccuracy] = useState();
  const [loss, setLoss] = useState();

  const { t: translation } = useTranslation();

  const evaluate = async () => {
    const model = await createModel(categories.length - 1, 100);

    const { x, y } = await createDataset(categories, images);

    const evaluation = (await model.evaluate(x, y)) as tensorflow.Scalar[];

    setLoss(evaluation[0]);
    setAccuracy(evaluation[1]);

    openSnackbar();
  };

  return (
    <React.Fragment>
      <ListItem button dense onClick={evaluate}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>

        <ListItemText primary={translation('Evaluate')} />
      </ListItem>

      <Snackbar
        closeSnackbar={closeSnackbar}
        message={`Loss: ${loss}, Accuracy: ${accuracy}`}
        openedSnackbar={openedSnackbar}
      />
    </React.Fragment>
  );
};

export default SidebarClassifierEvaluateListItem;
