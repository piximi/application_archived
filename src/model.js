/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

import * as tf from '@tensorflow/tfjs';

var weights;
var bias;

function logreg_loss(labels, ys) {
  // console.log('logreg_loss');
  // console.log(`labels.shape: ${labels.shape}`);
  // console.log(`ys.shape: ${ys.shape}`);

  return tf.losses.softmaxCrossEntropy(labels, ys).mean();
}

function logreg_model(X, weights, bias) {
  const num_features = X.shape[1];
  const Xs = X.as2D(-1, num_features);

  // console.log(`Xs.shape: ${Xs.shape}`);
  // console.log(`weights.shape: ${weights.shape}`);
  // console.log(`bias.shape: ${bias.shape}`);

  const logits = Xs.matMul(weights).add(bias);

  // console.log(`logits.shape: ${logits.shape}`);

  return logits;
}

// Train the model.
export function logreg_train(
  X,
  y,
  num_features,
  num_outputs,
  batch_size,
  learning_rate,
  num_epochs
) {
  const returnCost = true;

  weights = tf.variable(
    tf.randomNormal([num_features, num_outputs], 0, 1 / Math.sqrt(num_features))
  );
  bias = tf.variable(tf.zeros([num_outputs]));

  const optimizer = tf.train.sgd(learning_rate);

  for (let i = 0; i < num_epochs; i++) {
    const cost = optimizer.minimize(() => {
      return logreg_loss(y, logreg_model(X, weights, bias));
    }, returnCost);

    console.log(`logreg_loss[${i}]: ${cost.dataSync()}`);
  }
  console.log('Training is over!');
}

export function logreg_prob(x) {
  const pred = tf.tidy(() => {
    return tf.softmax(logreg_model(x, weights, bias));
  });
  return pred;
}

// Predict the digit number from a batch of input images.
export function logreg_predict(x) {
  const pred = tf.tidy(() => {
    const axis = 1;
    return logreg_model(x, weights, bias).argMax(axis);
  });
  return Array.from(pred.dataSync());
}

// Given a logits or label vector, return the class indices.
export function logreg_classesFromLabel(y) {
  const axis = 1;
  const pred = y.argMax(axis);
  return Array.from(pred.dataSync());
}
