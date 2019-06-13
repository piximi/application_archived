import {
  Dialog,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Slide
} from '@material-ui/core';
import * as React from 'react';
import { useState } from 'react';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import { useTranslation } from 'react-i18next';
import { useDialog, useSnackbar } from '@piximi/hooks';
import { Snackbar } from '@piximi/components';
import { createDataset, createModel } from '../../../network';
import { Logs } from '@tensorflow/tfjs-layers';
import * as tensorflow from '@tensorflow/tfjs';
import { Close, ArrowBack } from '@material-ui/icons';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { TransitionProps } from '@material-ui/core/transitions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: 'rgb(255, 255, 255)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
      boxShadow: 'none',
      position: 'relative'
    },
    root: {
      zIndex: 1100
    },
    paper: {
      zIndex: 1100
    },
    paperFullScreen: {
      left: '280px'
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    }
  })
);

const FitclassifierDialogTransition = React.forwardRef<
  unknown,
  TransitionProps
>(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const FitclassifierDialog = (props: any) => {
  const { openedDialog, closeDialog } = props;

  const classes = useStyles();

  return (
    <Dialog
      classes={{
        paperFullScreen: classes.paperFullScreen,
        paper: classes.paper
      }}
      fullScreen
      onClose={closeDialog}
      open={openedDialog}
      style={{ zIndex: 1100 }}
      TransitionComponent={FitclassifierDialogTransition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={closeDialog}
            aria-label="Close"
            style={{ color: 'rgba(0, 0, 0, 0.54)' }}
          >
            <ArrowBack />
          </IconButton>
        </Toolbar>
      </AppBar>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ArrowBack />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Expansion Panel 1</Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Dialog>
  );
};

const SidebarClassifierFitListItem = (props: any) => {
  const { categories, images } = props;

  const { openedDialog, openDialog, closeDialog } = useDialog();

  const { openedSnackbar, openSnackbar, closeSnackbar } = useSnackbar();

  const [message, setMessage] = useState();

  const { t: translation } = useTranslation();

  const fit = async () => {
    const model = await createModel(categories.length - 1, 100);

    console.log(tensorflow.memory());

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

    setMessage(history);
  };

  return (
    <React.Fragment>
      <ListItem button dense onClick={openDialog}>
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

      <FitclassifierDialog
        openedDialog={openedDialog}
        closeDialog={closeDialog}
      />
    </React.Fragment>
  );
};

export default SidebarClassifierFitListItem;
