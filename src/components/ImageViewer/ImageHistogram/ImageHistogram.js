import React, { PureComponent } from 'react';
import '../../../../node_modules/react-vis/dist/style.css';
import { XYPlot, XAxis, YAxis, VerticalBarSeries } from 'react-vis';

class ImageHistogram extends PureComponent {
  constructor(props) {
    super();
    this.canvas = React.createRef();
    this.state = {
      data: [],
      max: 0
    };
  }

  componentDidMount() {
    let image = new Image();
    image.onload = e => {
      const img = e.target;
      const canvas = this.canvas.current;
      const context = canvas.getContext('2d');
      context.drawImage(img, 0, img.height, img.width, img.height);
      const imageData = context.getImageData(
        0,
        img.height,
        img.width,
        img.height
      ).data;
      const data = this.createPlottableData(imageData);
      this.setState({ data: data });
    };
    image.src = this.props.src;
  }

  createPlottableData = imageData => {
    let intensityMap = {};
    let data = [];
    let max = 0;
    imageData.forEach(pixelIntensity => {
      if (pixelIntensity in intensityMap) {
        intensityMap[pixelIntensity] = intensityMap[pixelIntensity] + 1;
        if (intensityMap[pixelIntensity] > max) {
          max = intensityMap[pixelIntensity];
        }
      } else intensityMap[pixelIntensity] = 0;
    });

    for (let pixelIntensity in intensityMap) {
      data.push({ x: pixelIntensity, y: intensityMap[pixelIntensity] });
    }
    this.setState({ max: max });
    return data;
  };

  render() {
    const { data, max } = this.state;
    return (
      <React.Fragment>
        <canvas
          style={{ display: 'none' }}
          ref={this.canvas}
          height={300}
          width={300}
        />
        <XYPlot width={300} height={300} yDomain={[0, max]} xDomain={[0, 256]}>
          <VerticalBarSeries style={{ strokeWidth: 2 }} data={data} />
          <XAxis />
          <YAxis />
        </XYPlot>
      </React.Fragment>
    );
  }
}

export default ImageHistogram;
