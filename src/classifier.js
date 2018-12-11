import * as tensorflow from '@tensorflow/tfjs';
import { store } from './index';
import {
  updateImageCategoryAction,
  updateImageProbabilityAction
} from './actions/images';
import Dataset from './dataset';

let indexMap = {};
let categoryIndexArray = [];
let counter = 0;

const LEARNING_RATE = 1e-4;
const optimizer = tensorflow.train.adam(LEARNING_RATE);
// How many examples the model should "see" before making a parameter update.
const BATCH_SIZE = 4;
// How many batches to train the model for.
const TRAIN_BATCHES = 10;

// Every TEST_ITERATION_FREQUENCY batches, test accuracy over TEST_BATCH_SIZE examples.
// Ideally, we'd compute accuracy over the whole test set, but for performance
// reasons we'll use a subset.
const TEST_BATCH_SIZE = 4;
const TEST_ITERATION_FREQUENCY = 5;

async function loadNetwork(num_classes) {
  //get Prelaoded model of MobileNet
  const preLoadedmodel = await tensorflow.loadModel('indexeddb://classifier');

  //get some intermediate layer
  const layer = preLoadedmodel.getLayer('conv_pw_13_relu');

  let tmpModel = tensorflow.model({
    inputs: preLoadedmodel.inputs,
    outputs: layer.output
  });

  for (let i = 0; i < tmpModel.layers.length; i++) {
    tmpModel.layers[i].trainable = false;
  }

  const model = tensorflow.sequential({
    layers: [
      // Flattens the input to a vector so we can use it in a dense layer. While
      // technically a layer, this only performs a reshape (and has no training
      // parameters).
      tensorflow.layers.flatten({
        inputShape: [
          tmpModel.output.shape[1],
          tmpModel.output.shape[2],
          tmpModel.output.shape[3]
        ]
      }),
      tensorflow.layers.dense({
        units: 100,
        activation: 'relu',
        kernelInitializer: 'varianceScaling',
        useBias: true
      }),
      tensorflow.layers.dense({
        units: num_classes,
        kernelInitializer: 'VarianceScaling',
        useBias: false,
        activation: 'softmax'
      })
    ]
  });
  //compile the model
  model.compile({
    optimizer: optimizer,
    loss: 'categoricalCrossentropy',
    metrics: ['accuracy']
  });

  return { PretrainedModel: tmpModel, ShallowNet: model };
}

async function train(modelDict, datasetObj) {
  for (let i = 0; i < TRAIN_BATCHES; i++) {
    // TODO: Change function for getting training batch
    const batch = datasetObj.nextTrainBatch(BATCH_SIZE);

    let validationData;

    if (i % TEST_ITERATION_FREQUENCY === 0) {
      //TODO: get a new function to get validation batch
      validationData = datasetObj.nextValidationBatch(TEST_BATCH_SIZE);
    }

    console.log(validationData);

    // The entire dataset doesn't fit into memory so we call fit repeatedly
    // with batches.
    await modelDict['ShallowNet'].fit(
      modelDict['PretrainedModel'].predict(batch[0]),
      batch[1],
      {
        batchSize: BATCH_SIZE,
        // validationData: [
        //   modelDict['PretrainedModel'].predict(validationData[0]),
        //   validationData[1]
        // ],
        epochs: 1,
        callbacks: {
          onBatchEnd: async (batch, logs) => {
            console.log('Loss:' + logs.loss.toFixed(5));
            console.log('Accuracy:' + logs.acc);
            await tensorflow.nextFrame();
          }
        }
      }
    );
  }

  return true;
}

async function predict(modelDict, datasetObj) {
  //while (isPredicting) {
  tensorflow.tidy(() => {
    // Load img
    for (let img of datasetObj.predictionSet) {
      let imgTensor = tensorflow.fromPixels(img);

      //Preprocessing
      imgTensor = tensorflow.image.resizeBilinear(imgTensor, [224, 224]);
      imgTensor = imgTensor.expandDims(0);
      imgTensor = imgTensor
        .toFloat()
        .div(tensorflow.scalar(127.0))
        .sub(tensorflow.scalar(1.0));

      // Make a prediction through mobilenet, getting the internal activation of
      // the mobilenet model.
      const activation = modelDict['PretrainedModel'].predict(imgTensor);

      // Make a prediction through our newly-trained model using the activation
      // from mobilenet as input.
      const predictions = modelDict['ShallowNet'].predict(activation);

      // Returns the index with the maximum probability. This number corresponds
      // to the class the model thinks is the most probable given the input.
      passResults(img.identifier, predictions.as1D());
    }
    //return predictions//.as1D().argMax();
  });

  await tensorflow.nextFrame();
}

async function run(datasetObj) {
  const model = await loadNetwork(datasetObj.num_classes);

  let doneTraining = await train(model, datasetObj);

  if (doneTraining) {
    console.log('Predicting!');
    alert('Predicting');
    await predict(model, datasetObj);
  }
}

function getCategoryIndex(categoryId, categories) {
  let index = 0;
  for (let category of categories) {
    if (categoryId === category.identifier) {
      return index;
    } else {
      index++;
    }
  }
  return null;
}

function passResults(imgId, predictions) {
  let predictionsArray = predictions.dataSync();
  let index = indexMap[predictionsArray.indexOf(Math.max(...predictionsArray))];
  let category = store.getState().categories[index].identifier;
  store.dispatch(updateImageCategoryAction(imgId, category));
  let probability = predictionsArray[index];
  store.dispatch(updateImageProbabilityAction(imgId, probability));
}

// TODO: Make it work with Redux

async function fitAndPredict(images, categories) {
  //const collection = databaseAPI.indexeddb.images.toCollection();
  const imageTags = createImageTags(images.images, categories);
  const dataset = new Dataset();
  dataset.loadFromArray(imageTags);
  run(dataset);
  return null;
}

async function exportWeights() {
  const preLoadedmodel = await tensorflow.loadModel('indexeddb://classifier');
  await preLoadedmodel.save('downloads://classifier');
}

async function importWeights(weightsFile) {
  fetch('https://weights.cyto.ai/mobilenet/model.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      const jsonString = JSON.stringify(myJson);
      const modelFile = new File([jsonString], 'classifier', {
        type: 'application/json'
      });
      // TODO Make this working
      tensorflow.loadModel(
        tensorflow.io.browserFiles([modelFile, weightsFile])
      );
    });
}

function createImageTags(images, categories) {
  indexMap = {};
  counter = 0;
  categoryIndexArray = [];

  const imageTags = Object.values(images).map(image => {
    let categoryIndex = getCategoryIndex(image.category, categories);
    // Create Index Map
    if (!categoryIndexArray.includes(categoryIndex) && categoryIndex !== null) {
      categoryIndexArray.push(categoryIndex);
      indexMap[counter] = categoryIndex;
      counter++;
    }
    let imageTag = new Image();
    imageTag.identifier = image.id;
    imageTag.category = getCategoryIndex(image.category, categories);
    imageTag.src = image.src;
    return imageTag;
  });
  return imageTags;
}

export { fitAndPredict, exportWeights, importWeights };
