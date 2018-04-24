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

// Initialize the application.
// run();
export { run };
