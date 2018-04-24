import * as data from './dataset';
import * as training from './simpleMobileNetScript';

const getImData = () => {
  return document.getElementsByClassName('sample');
};

async function trainOnRun(imgData) {
  //var imgArray= getImData();
  //for (var i of imgArray){
  //console.log(i);
  //console.log(i.id, " : ", i.catId);
  //}
  var dataset = new data.Dataset();

  dataset.loadFromArray(getImData());

  await training.run(dataset);
  //console.log(dataset.nextTrainBatch(8));

  return null;
}

export { getImData, trainOnRun };
