import React, { PureComponent } from 'react';

class Image extends PureComponent {
  constructor() {
    super();
    this.state = { imageStatus: 'loading' };
    this.myRef = React.createRef();
  }

  handleImageLoaded(e) {
    const canvas = this.myRef.current;
    const image = e.target;
    const context = canvas.getContext('2d');
    canvas.height = this.props.height * 0.9;
    canvas.width = this.props.width * 0.9;
    const ratio = Math.min(
      canvas.width / image.width,
      canvas.height / image.height
    );
    canvas.height = image.height * ratio;
    canvas.width = image.width * ratio;
    context.drawImage(image, 0, 0, image.width * ratio, image.height * ratio);
    image.style.height = '0px';
    this.setState({ imageStatus: 'loaded' });
  }

  handleImageErrored() {
    this.setState({ imageStatus: 'failed to load' });
  }

  render() {
    const { src, openImageViewerDialog } = this.props;
    return (
      <div>
        <canvas
          onDoubleClick={openImageViewerDialog}
          type={'selectableElement'}
          style={{ verticalAlign: 'middle', padding: '2px' }}
          ref={this.myRef}
          height={this.props.height}
          width={this.props.width}
        />
        <img
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}
          ref="image"
          alt="foo"
          src={src}
          style={{ visibility: 'hidden' }}
        />
      </div>
    );
  }
}

export default Image;
