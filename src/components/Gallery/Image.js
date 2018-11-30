import React, { Component } from 'react';

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

  // Make sure component is updated
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.width === nextProps.width) {
      return true;
    }
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
    this.draw();
  };

  handleImageErrored() {
    this.setState({ imageStatus: 'failed to load' });
  }

  // Draw canvas
  draw() {
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
      context.drawImage(
        this.state.image,
        0,
        0,
        this.state.imgWidth * ratio,
        this.state.imgHeight * ratio
      );
    }
  }

  render() {
    const { src, openImageViewerDialog } = this.props;
    this.draw();
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

export default Image;
