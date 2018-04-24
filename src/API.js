import store from '../index';
import * as data from './dataset';
import * as training from './simpleMobileNetScript';

const getImData = () => {
  if (store == null) {
    return null;
  } else {
    let images = Object.values(store.getState().images);
    const imgTags = images.map(image => {
      var img = new Image();
      img.src = image.src;
      img.id = image.id;
      img.catId = image.category;
      return img;
    });
    return imgTags;
  }
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
