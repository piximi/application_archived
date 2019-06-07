import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import { useState } from 'react';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from '@piximi/hooks';
import { Snackbar } from '@piximi/components';
import { createDataset, createModel } from '../../../network';
import { Logs } from '@tensorflow/tfjs-layers';

const SidebarClassifierFitListItem = (props: any) => {
  const { categories, images } = props;

  const { openedSnackbar, openSnackbar, closeSnackbar } = useSnackbar();

  const [message, setMessage] = useState();

  const { t: translation } = useTranslation();

  const fit = async () => {
    const model = await createModel(categories.length - 1, 100);

    const { success, x, y } = await createDataset(categories, images);

    if (!success) {
      return;
    }

    openSnackbar();

    const args = {
      batchSize: 1,
      callbacks: {
        onTrainBegin: async (logs?: Logs | undefined) => {
          console.log(`onTrainBegin`);
        },
        onTrainEnd: async (logs?: Logs | undefined) => {
          closeSnackbar();
        },
        onEpochBegin: async (epoch: number, logs?: Logs | undefined) => {
          console.log(`onEpochBegin ${epoch}`);
        },
        onEpochEnd: async (epoch: number, logs?: Logs | undefined) => {
          if (logs) {
            console.log(`onEpochEnd ${epoch}, loss: ${logs.loss}`);
          }
        },
        onBatchBegin: async (batch: number, logs?: Logs | undefined) => {
          console.log(`onBatchBegin ${batch}`);
        },
        onBatchEnd: async (batch: number, logs?: Logs | undefined) => {
          console.log(`onBatchEnd ${batch}`);
        }
      },
      epochs: 10,
      shuffle: true,
      validationSplit: 0.2,
      verbose: 2
    };

    const history = await model.fit(x, y, args);

    console.log(history);
  };

  return (
    <React.Fragment>
      <ListItem button dense onClick={fit}>
        <ListItemIcon>
          <ScatterPlotIcon />
        </ListItemIcon>

        <ListItemText primary={translation('Fit')} />
      </ListItem>

      <Snackbar
        closeSnackbar={closeSnackbar}
        message={message}
        openedSnackbar={openedSnackbar}
      />
    </React.Fragment>
  );
};

export default SidebarClassifierFitListItem;
