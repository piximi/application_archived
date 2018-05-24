import * as tensorflow from '@tensorflow/tfjs';
import { store } from './index';
import {
  updateImageCategoryAction,
  updateImageProbability
} from './actions/images';

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

let VALIDATIONSET_RATIO = 0.3;

async function loadNetwork(num_classes) {
  //get Prelaoded model of MobileNet
  const preLoadedmodel = await tensorflow.loadModel(
    'https://weights.cyto.ai/mobilenet/model.json'
  );

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

    //console.log(validationData);

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
      //console.log(img.identifier)
      //predictions.as1D().print();
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

class Dataset {
  constructor() {
    this.numClasses = 0;

    this.trainingSet = [];
    this.trainingSetShuffledIndices = [];
    this.trainingSetIndex = 0;

    this.validationSet = [];
    this.validationSetIndex = 0;
    this.validationSetShuffledIndices = [];

    this.predictionSet = [];
  }

  get num_classes() {
    return this.numClasses;
  }

  loadFromArray(imDataArray) {
    // function to split into training, validation and prediction set
    if (imDataArray == null) {
      throw 'No Image Data Array given.';
    }

    let labeledImages = {};

    for (let image of imDataArray) {
      if (image.category == null) {
        this.predictionSet.push(image);
      } else {
        let currentLabelID = image.category;

        if (currentLabelID in labeledImages) {
          labeledImages[currentLabelID].push(image);
        } else {
          labeledImages[currentLabelID] = [image];
        }
      }
    }

    this.numClasses = Object.keys(labeledImages).length;

    for (let labelId in labeledImages) {
      // At least 1 element
      let numSamplesValidation = Math.max(
        1,
        Math.round(labeledImages[labelId].length * VALIDATIONSET_RATIO)
      );

      let validationIndices = tensorflow.util.createShuffledIndices(
        numSamplesValidation
      );

      for (let i = 0; i < labeledImages[labelId].length; i++) {
        if (i in validationIndices) {
          this.validationSet.push(labeledImages[labelId][i]);
        } else {
          this.trainingSet.push(labeledImages[labelId][i]);
        }
      }
    }

    this.trainingSetShuffledIndices = tensorflow.util.createShuffledIndices(
      this.trainingSet.length
    );

    this.validationSetShuffledIndices = tensorflow.util.createShuffledIndices(
      this.validationSet.length
    );

    alert('Training');
    console.log(
      'Training Set n_t =',
      this.trainingSet.length,
      ' Elements: ',
      this.trainingSet
    );

    console.log(
      'Validation Set n_v =',
      this.validationSet.length,
      ' Elements: ',
      this.validationSet
    );

    console.log(
      'Prediction Set n_p =',
      this.predictionSet.length,
      ' Elements: ',
      this.predictionSet
    );
  }

  nextTrainBatch(batchSize) {
    return this.nextRandomBatch(
      batchSize,
      this.trainingSet,
      this.trainingSetShuffledIndices,
      () => {
        this.trainingSetIndex = this.trainingSetShuffledIndices[
          (this.trainingSetIndex + 1) % this.trainingSet.length
        ];
        return this.trainingSetIndex;
      }
    );
  }

  nextValidationBatch(batchSize) {
    return this.nextRandomBatch(
      batchSize,
      this.validationSet,
      this.validationSetShuffledIndices,
      () => {
        this.validationSetIndex = this.validationSetShuffledIndices[
          (this.validationSetIndex + 1) % this.validationSet.length
        ];
        return this.validationSetIndex;
      }
    );
  }

  // TODO: change to shuffled indices list
  nextRandomBatch(batchSize, datasetList, shuffleIndices, updateIndexFunc) {
    let batchXY = [];

    for (let i = 0; i < batchSize; i++) {
      batchXY.push(datasetList[shuffleIndices[updateIndexFunc()]]);
    }

    return this.convertToBatchTensor(batchXY);
  }

  convertToBatchTensor(imageArray) {
    return tensorflow.tidy(() => {
      let xs = null;
      // var ys = null;
      let ys2 = null;

      for (let img of imageArray) {
        let imgTensor = tensorflow.fromPixels(img);

        imgTensor = tensorflow.image.resizeBilinear(imgTensor, [224, 224]);
        imgTensor = imgTensor.expandDims(0);
        imgTensor = imgTensor
          .toFloat()
          .div(tensorflow.scalar(127.0))
          .sub(tensorflow.scalar(1.0));
        if (xs == null) {
          xs = imgTensor;
        } else {
          xs = xs.concat(imgTensor, 0);
        }

        if (ys2 == null) {
          ys2 = [img.category];
        } else {
          ys2.push(img.category);
        }
      }
      const labelBatch = tensorflow.oneHot(
        tensorflow.tensor1d(ys2),

        this.numClasses
      );

      return [tensorflow.keep(xs), tensorflow.keep(labelBatch)];
    });
  }
}

function getCategoryIndex(categoryId, categories) {
  let index = 0;
  for (let category of categories) {
    if (categoryId == category.identifier) {
      return index;
    } else {
      index++;
    }
  }
  return null;
}

function passResults(imgId, predictions) {
  //console.log(imgId);
  let predictionsArray = predictions.dataSync();
  //console.log(predictionsArray);
  let index = indexMap[predictionsArray.indexOf(Math.max(...predictionsArray))];
  //console.log(index);
  let category = store.getState().categories[index].identifier;
  //console.log(category);
  store.dispatch(updateImageCategoryAction(imgId, category));
  let probability = predictionsArray[index];
  store.dispatch(updateImageProbability(imgId, probability));
}

async function trainOnRun(images, categories) {
  indexMap = {};
  counter = 0;
  categoryIndexArray;
  const imageTags = images.images.map(observation => {
    let categoryIndex = getCategoryIndex(observation.category, categories);

    // Create Index Map
    if (!categoryIndexArray.includes(categoryIndex) && categoryIndex !== null) {
      categoryIndexArray.push(categoryIndex);
      indexMap[counter] = categoryIndex;
      counter++;
    }

    let image = new Image();
    image.identifier = observation.identifier;
    image.category = getCategoryIndex(observation.category, categories);
    image.src = images.imageByteStrings[observation.identifier];
    return image;
  });
  console.log(indexMap);

  const dataset = new Dataset();
  dataset.loadFromArray(imageTags);
  await run(dataset);
  return null;
}

export { trainOnRun };
