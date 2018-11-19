import * as tensorflow from '@tensorflow/tfjs';

let VALIDATIONSET_RATIO = 0.3;

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
      console.log('No Image Data Array given.');
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
        tensorflow.tensor1d(ys2, 'int32'),
        this.numClasses
      );

      return [tensorflow.keep(xs), tensorflow.keep(labelBatch)];
    });
  }
}

export default Dataset;
