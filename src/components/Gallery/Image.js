import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  constructor() {
    super();
    this.state = {
      imageStatus: 'loading',
      image: null,
      imgHeight: null,
      imgWidth: null
    };
    this.canvas = React.createRef();
  }

  componentDidMount() {
    this.draw();
  }

  componentDidUpdate() {
    this.draw();
  }

  // Set image data as state
  handleLoadedImage = e => {
    const image = e.target;
    const width = image.width;
    const height = image.height;
    this.setState({
      imageStatus: 'loaded',
      image: image,
      imgHeight: height,
      imgWidth: width
    });
    image.style.height = '0px';
  };

  handleImageErrored() {
    this.setState({ imageStatus: 'failed to load' });
  }

  // Draw canvas
  draw = () => {
    if (this.state.imageStatus === 'loaded') {
      const canvas = this.canvas.current;
      const context = canvas.getContext('2d');
      canvas.height = this.props.height * 0.9;
      canvas.width = this.props.width * 0.9;
      const ratio = Math.min(
        canvas.width / this.state.imgWidth,
        canvas.height / this.state.imgHeight
      );
      canvas.height = this.state.imgHeight * ratio;
      canvas.width = this.state.imgWidth * ratio;

      // Apply filters to context
      context.filter =
        'brightness(' +
        this.props.brightness +
        '%)  contrast(' +
        this.props.contrast +
        '%)';

      context.drawImage(this.state.image, 0, 0, canvas.width, canvas.height);

      // Apply selected channel filter
      const pixel = context.getImageData(0, 0, canvas.width, canvas.height);
      let data = pixel.data;
      this.selectVisibleChannels(data, this.props.unselectedChannels);
      context.putImageData(pixel, 0, 0);
    }
  };

  selectVisibleChannels = (imageData, nonVisibleChannels) => {
    for (let i = 0; i < imageData.length; i += 4) {
      for (let j = 0; j < 4; j += 1) {
        if (nonVisibleChannels.includes(j)) imageData[j + i] = 0;
      }
    }
  };

  render() {
    const { src, openImageViewerDialog } = this.props;
    return (
      <React.Fragment>
        <canvas
          onDoubleClick={openImageViewerDialog}
          type={'selectableElement'}
          style={{ verticalAlign: 'middle', padding: '2px' }}
          ref={this.canvas}
          height={this.props.height}
          width={this.props.width}
        />
        <img
          onLoad={this.handleLoadedImage}
          onError={this.handleImageErrored.bind(this)}
          alt="foo"
          src={src}
          style={{ visibility: 'hidden' }}
        />
      </React.Fragment>
    );
  }
}

Image.propTypes = {
  src: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  brightness: PropTypes.number,
  contrast: PropTypes.number,
  unselectedChannels: PropTypes.array
};

Image.defaultProps = {
  brightness: 100,
  contrast: 100,
  unselectedChannels: []
};

export default Image;
