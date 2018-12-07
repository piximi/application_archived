import React, { Component } from 'react';
//import styles from './ImageHistogram.css';
//import '../node_modules/react-vis/dist/style.css';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  AreaSeries
} from 'react-vis';

class ImageHistogram extends Component {
  createPlottableData = imageData => {};

  render() {
    return (
      <XYPlot width={300} height={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <AreaSeries
          className="area-series-example"
          curve="curveNatural"
          data={[{ x: 1, y: 10 }, { x: 2, y: 5 }, { x: 3, y: 15 }]}
        />
      </XYPlot>
    );
  }
}

export default ImageHistogram;
