import { Category, Image } from '@piximi/types';
import * as ImageJS from 'image-js';
import * as tensorflow from '@tensorflow/tfjs';
import * as _ from 'lodash';

const createModel = async (
  classes: number,
  units: number,
  loss: string,
  metrics: string[],
  optimizer: tensorflow.Optimizer
) => {
  const resource =
    'https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json';

  const mobilenet = await tensorflow.loadLayersModel(resource);

  const layer = mobilenet.getLayer('conv_pw_13_relu');

  const backbone = tensorflow.model({
    inputs: mobilenet.inputs,
    outputs: layer.output
  });

  for (const layer of backbone.layers) layer.trainable = false;

  const a = tensorflow.layers.flatten({
    inputShape: backbone.outputs[0].shape.slice(1)
  });

  const b = tensorflow.layers.dense({
    units: units,
    activation: 'relu',
    kernelInitializer: 'varianceScaling',
    useBias: true
  });

  const c = tensorflow.layers.dense({
    units: classes,
    kernelInitializer: 'varianceScaling',
    useBias: false,
    activation: 'softmax'
  });

  const config = {
    layers: [...backbone.layers, a, b, c]
  };

  const model = tensorflow.sequential(config);

  //const optimizer = tensorflow.train.adam();

  model.compile({
    loss: 'categoricalCrossentropy',
    metrics: metrics,
    optimizer: optimizer
  });

  return model;
};

const getArgs = (batchSize: number, epochs: number) => {
  const arg = {
    batchSize: batchSize,
    callbacks: {
      onTrainBegin: async (logs?: tensorflow.Logs | undefined) => {
        console.log(`onTrainBegin`);
      },
      onTrainEnd: async (logs?: tensorflow.Logs | undefined) => {},
      onEpochBegin: async (
        epoch: number,
        logs?: tensorflow.Logs | undefined
      ) => {
        console.log(`onEpochBegin ${epoch}`);
      },
      onEpochEnd: async (epoch: number, logs?: tensorflow.Logs | undefined) => {
        if (logs) {
          console.log(`onEpochEnd ${epoch}, loss: ${logs.loss}`);
        }
        // if (stopTraining) {
        //   model.stopTraining = true;
        // }
      },
      onBatchBegin: async (
        batch: number,
        logs?: tensorflow.Logs | undefined
      ) => {
        console.log(`onBatchBegin ${batch}`);
      },
      onBatchEnd: async (batch: number, logs?: tensorflow.Logs | undefined) => {
        console.log(`onBatchEnd ${batch}`);
      }
    },
    epochs: epochs
  };
  return getArgs;
};

export { createModel, getArgs };
