import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import { useState } from 'react';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from '@piximi/hooks';
import { Snackbar } from '@piximi/components';
import { createDataset, createModel } from '../../../network';
import {
  fitAndPredict,
  exportWeights,
  importWeights,
  categories
} from '../../../classifierBackup';
import { Logs } from '@tensorflow/tfjs-layers';

const SidebarClassifierFitListItem = (props: any) => {
  const { categories, images } = props;

  const { openedSnackbar, openSnackbar, closeSnackbar } = useSnackbar();

  const [message, setMessage] = useState();

  const { t: translation } = useTranslation();

  // const fit = async () => {

  //   var t0 = performance.now();
  //   const model = await createModel(categories.length - 1, 100);
  //   var t1 = performance.now();
  //   console.log("createModel took " + ((t1 - t0)/1000) + " seconds.")

  //   t0 = performance.now();
  //   const { sucsess, x, y } = await createDataset(categories, images);
  //   t1 = performance.now();
  //   console.log("createDataset took " + ((t1 - t0)/1000) + " seconds.")

  //   if (!sucsess) {
  //     return;
  //   }

  //   openSnackbar();

  //   const args = {
  //     batchSize: 32,
  //     callbacks: {
  //       onTrainBegin: async (logs?: Logs | undefined) => {
  //         setMessage(`onTrainBegin`);
  //       },
  //       onTrainEnd: async (logs?: Logs | undefined) => {
  //         closeSnackbar();
  //       },
  //       onEpochBegin: async (epoch: number, logs?: Logs | undefined) => {
  //         setMessage(`onEpochBegin ${epoch}`);
  //       },
  //       onEpochEnd: async (epoch: number, logs?: Logs | undefined) => {
  //         if (logs) {
  //           setMessage(`onEpochEnd ${epoch}, loss: ${logs.loss}`);
  //         }
  //       },
  //       onBatchBegin: async (batch: number, logs?: Logs | undefined) => {
  //         setMessage(`onBatchBegin ${batch}`);
  //       },
  //       onBatchEnd: async (batch: number, logs?: Logs | undefined) => {
  //         setMessage(`onBatchEnd ${batch}`);
  //       }
  //     },
  //     epochs: 10,
  //     shuffle: true,
  //     verbose: 1
  //   };

  //   t0 = performance.now();
  //   const history = await model.fit(x, y, args);
  //   t1 = performance.now();
  //   console.log("createDataset took " + ((t1 - t0)/1000) + " seconds.")
  //   debugger;
  //   console.log(history);
  // };

  const fit = async () => {
    fitAndPredict(images, categories);
  };

  return (
    <React.Fragment>
      <ListItem button dense onClick={fit}>
        <ListItemIcon>
          <PlayCircleOutlineIcon />
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
