import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import { useState } from 'react';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from '@cytoai/hooks';
import { Snackbar } from '@cytoai/components';
import { Network } from '../../../network';
import { UnresolvedLogs } from '@tensorflow/tfjs-layers/dist/logs';

const SidebarClassifierFitListItem = (props: any) => {
  const { categories, images } = props;

  const { openedSnackbar, openSnackbar, closeSnackbar } = useSnackbar();

  const [message, setMessage] = useState();

  const { t: translation } = useTranslation();

  const fit = async () => {
    try {
      const network = new Network(categories, images);

      const { x, y } = await network.dataset();

      const resource =
        'https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json';

      await network.load(resource);

      network.compile();

      const args = {
        callbacks: {
          onTrainBegin: (logs?: UnresolvedLogs) => {
            console.log('onTrainBegin');
          },
          onTrainEnd: (logs?: UnresolvedLogs) => {
            console.log('onTrainEnd');
          },
          onEpochBegin: (epoch: number, logs?: UnresolvedLogs) => {
            console.log('onEpochBegin');
          },
          onEpochEnd: (epoch: number, logs?: UnresolvedLogs) => {
            console.log('onEpochEnd');
          },
          onBatchBegin: (batch: number, logs?: UnresolvedLogs) => {
            console.log('onBatchBegin');
          },
          onBatchEnd: (batch: number, logs?: UnresolvedLogs) => {
            console.log('onBatchEnd');
          }
        }
      };

      network.fit(x, y, args);

      console.log(x);

      setMessage('success');
    } catch (e) {
      setMessage(e);
    }

    openSnackbar();
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
