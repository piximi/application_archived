import * as tf from '@tensorflow/tfjs';

//console.log(model)
const LEARNING_RATE = 1e-4;
const optimizer = tf.train.adam(LEARNING_RATE);
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
  const preLoadedmodel = await tf.loadModel(
    'http://weights.cyto.ai/mobilenet/model.json'
  );

  //get some intermediate layer
  const layer = preLoadedmodel.getLayer('conv_pw_13_relu');

  var tmpModel = tf.model({
    inputs: preLoadedmodel.inputs,
    outputs: layer.output
  });

  for (var i = 0; i < tmpModel.layers.length; i++) {
    tmpModel.layers[i].trainable = false;
  }
  /*
  //flattenlayer
  const flattenLayer = tf.layers.flatten();
  //create denselayer for class prediction
  const dense = tf.layers.dense({
    units: num_classes,
    kernelInitializer: 'VarianceScaling',
    activation: 'softmax'
  });

  //apply the layers
  const output = dense.apply(flattenLayer.apply(tmpModel.outputs));

  //create the model
  const model = tf.model({inputs: preLoadedmodel.inputs, outputs: output});

  */

  const model = tf.sequential({
    layers: [
      // Flattens the input to a vector so we can use it in a dense layer. While
      // technically a layer, this only performs a reshape (and has no training
      // parameters).
      tf.layers.flatten({
        inputShape: [
          tmpModel.output.shape[1],
          tmpModel.output.shape[2],
          tmpModel.output.shape[3]
        ]
      }),
      // The number of units of the last layer should correspond
      // to the number of classes we want to predict.
      tf.layers.dense({
        units: 100,
        activation: 'relu',
        kernelInitializer: 'varianceScaling',
        useBias: true
      }),
      tf.layers.dense({
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
    //tf.tensor(batch[0]).print();
    var testBatch;
    var validationData;
    // Every few batches test the accuracy of the mode.
    if (i % TEST_ITERATION_FREQUENCY === 0) {
      //TODO: get a new function to get validation batch
      validationData = datasetObj.nextValidationBatch(TEST_BATCH_SIZE);
    }

    // The entire dataset doesn't fit into memory so we call fit repeatedly
    // with batches.
    const history = await modelDict['ShallowNet'].fit(
      modelDict['PretrainedModel'].predict(batch[0]),
      batch[1],
      {
        batchSize: BATCH_SIZE,
        validationData: [
          modelDict['PretrainedModel'].predict(validationData[0]),
          validationData[1]
        ],
        epochs: 1,
        callbacks: {
          onBatchEnd: async (batch, logs) => {
            console.log('Loss:' + logs.loss.toFixed(5));
            console.log('Accuracy:' + logs.acc);
            await tf.nextFrame();
          }
        }
      }
    );

    // ... plotting code ...
  }

  return true;
}

//var isPredicting = true;

async function predict(modelDict, datasetObj) {
  //while (isPredicting) {
  const predictedClass = tf.tidy(() => {
    // Load img
    for (var img of datasetObj.predictionSet) {
      var imgTensor = tf.fromPixels(img);

      //Preprocessing
      imgTensor = tf.image.resizeBilinear(imgTensor, [224, 224]);
      imgTensor = imgTensor.expandDims(0);
      imgTensor = imgTensor
        .toFloat()
        .div(tf.scalar(127.0))
        .sub(tf.scalar(1.0));

      // Make a prediction through mobilenet, getting the internal activation of
      // the mobilenet model.
      const activation = modelDict['PretrainedModel'].predict(imgTensor);

      // Make a prediction through our newly-trained model using the activation
      // from mobilenet as input.
      const predictions = modelDict['ShallowNet'].predict(activation);

      // Returns the index with the maximum probability. This number corresponds
      // to the class the model thinks is the most probable given the input.
      console.log(img, predictions.as1D().print());
    }
    //return predictions//.as1D().argMax();
  });

  //const classId = (await predictedClass.data())[0];
  //console.log(predictedClass.data())
  // ui.predictClass(classId);
  await tf.nextFrame();
  //}
  // ui.donePredicting();
}

async function run(datasetObj) {
  const model = await loadNetwork(datasetObj.num_classes);

  console.log(model);

  var doneTraining = await train(model, datasetObj);
  if (doneTraining) {
    console.log('Predicting!');
    await predict(model, datasetObj);
  }
}

var VALIDATIONSET_RATIO = 0.3;

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
    var labeledImages = {};

    for (var currentImage of imDataArray) {
      if (currentImage.catId == null) {
        this.predictionSet.push(currentImage);
      } else {
        var currentLabelID = currentImage.catId;
        if (currentLabelID in labeledImages) {
          labeledImages[currentLabelID].push(currentImage);
        } else {
          labeledImages[currentLabelID] = [currentImage];
        }
      }
    }

    this.numClasses = Object.keys(labeledImages).length;

    for (var labelId in labeledImages) {
      // At least 1 element
      var numSamplesValidation = Math.max(
        1,
        Math.round(labeledImages[labelId].length * VALIDATIONSET_RATIO)
      );
      var validationIndices = tf.util.createShuffledIndices(
        numSamplesValidation
      );

      for (var i = 0; i < labeledImages[labelId].length; i++) {
        if (i in validationIndices) {
          this.validationSet.push(labeledImages[labelId][i]);
        } else {
          this.trainingSet.push(labeledImages[labelId][i]);
        }
      }
    }

    this.trainingSetShuffledIndices = tf.util.createShuffledIndices(
      this.trainingSet.length
    );
    this.validationSetShuffledIndices = tf.util.createShuffledIndices(
      this.validationSet.length
    );

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
    var batchXY = [];
    for (var i = 0; i < batchSize; i++) {
      batchXY.push(datasetList[shuffleIndices[updateIndexFunc()]]);
    }
    var result = this.convertToBatchTensor(batchXY);
    return result;
  }

  convertToBatchTensor(imageArray) {
    return tf.tidy(() => {
      var xs = null;
      var ys = null;
      var ys2 = null;
      for (var img of imageArray) {
        // Convert the image to tensor
        const imgTensor = tf.fromPixels(img);
        const labelTensor = tf.oneHot(
          tf.tensor1d([img.catId]),
          this.numClasses
        );

        imgTensor = tf.image.resizeBilinear(imgTensor, [224, 224]);
        imgTensor = imgTensor.expandDims(0);
        imgTensor = imgTensor
          .toFloat()
          .div(tf.scalar(127.0))
          .sub(tf.scalar(1.0));
        if (xs == null) {
          xs = imgTensor;
        } else {
          xs = xs.concat(imgTensor, 0);
        }

        if (ys2 == null) {
          ys2 = [img.catId];
        } else {
          ys2.push(img.catId);
        }
      }
      const labelBatch = tf.oneHot(tf.tensor1d(ys2), this.numClasses);
      return [tf.keep(xs), tf.keep(labelBatch)];
    });
  }
}

const getImData = () => {
  return document.getElementsByClassName('sample');
};

async function trainOnRun(imgData) {
  //var imgArray= getImData();
  //for (var i of imgArray){
  //console.log(i);
  //console.log(i.id, " : ", i.catId);
  //}
  var dataset = new Dataset();

  dataset.loadFromArray(getImData());

  await run(dataset);
  //console.log(dataset.nextTrainBatch(8));

  return null;
}

export { getImData, Dataset, trainOnRun, run };
