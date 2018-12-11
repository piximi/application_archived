import React, { PureComponent } from 'react';
import '../../../../node_modules/react-vis/dist/style.css';
import { XYPlot, XAxis, YAxis, VerticalBarSeries } from 'react-vis';

class ImageHistogram extends PureComponent {
  constructor(props) {
    super();
    this.canvas = React.createRef();
    this.state = {
      data: []
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
      console.log(true);
    };
    image.src = this.props.src;
  }

  createPlottableData = imageData => {
    let data = [];
    imageData.forEach((pixelIntensity, index) => {
      data.push({ x: index, y: pixelIntensity });
    });
    return data;
  };

  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <canvas
          style={{ display: 'none' }}
          ref={this.canvas}
          height={300}
          width={300}
        />
        <XYPlot
          width={300}
          height={300}
          yDomain={[0, 255]}
          xDomain={[0, 17000]}
        >
          <VerticalBarSeries style={{ strokeWidth: 2 }} data={data} />
          <XAxis />
          <YAxis />
        </XYPlot>
      </React.Fragment>
    );
  }
}

export default ImageHistogram;
