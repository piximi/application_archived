import * as tf from '@tensorflow/tfjs';

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

export { Dataset };
