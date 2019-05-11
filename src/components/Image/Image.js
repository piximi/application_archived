import * as React from 'react';

const Image = props => {
  const { src, openImageViewerDialog } = props;

  const [imageStatus, setImageStatus] = React.useState('loading');
  const [image, setImage] = React.useState(null);
  const [imageHeight, setImageHeight] = React.useState(null);
  const [imageWidth, setImageWidth] = React.useState(null);

  let canvasRef = React.useRef();

  const onLoad = e => {
    const image = e.target;
    const width = image.width;
    const height = image.height;
    setImageStatus('loaded');
    setImage(image);
    setImageHeight(height);
    setImageWidth(width);
    image.style.height = '0px';
  };

  const onError = () => {
    setImageStatus('failed to load');
  };

  // Draw canvas
  const draw = () => {
    if (imageStatus === 'loaded') {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      canvas.height = props.height * 0.9;
      canvas.width = props.width * 0.9;
      const ratio = Math.min(
        canvas.width / imageWidth,
        canvas.height / imageHeight
      );
      canvas.height = imageHeight * ratio;
      canvas.width = imageWidth * ratio;

      // Apply filters to context
      context.filter =
        'brightness(' +
        props.brightness +
        '%)  contrast(' +
        props.contrast +
        '%)';

      context.drawImage(image, 0, 0, canvas.width, canvas.height);

      // Apply selected channel filter
      const pixel = context.getImageData(0, 0, canvas.width, canvas.height);
      let data = pixel.data;
      selectVisibleChannels(data, props.unselectedChannels);
      context.putImageData(pixel, 0, 0);
    }
  };

  const selectVisibleChannels = (imageData, nonVisibleChannels) => {
    for (let i = 0; i < imageData.length; i += 4) {
      for (let j = 0; j < 4; j += 1) {
        if (nonVisibleChannels.includes(j)) imageData[j + i] = 0;
      }
    }
  };

  React.useEffect(() => {
    draw();
  });

  return (
    <div>
      <canvas
        onDoubleClick={openImageViewerDialog}
        type={'selectableElement'}
        style={{ verticalAlign: 'middle', padding: '2px' }}
        ref={canvasRef}
        height={props.height}
        width={props.width}
      />
      <img
        onLoad={onLoad}
        onError={onError}
        alt="foo"
        src={src}
        style={{ visibility: 'hidden' }}
      />
    </div>
  );
};

Image.defaultProps = {
  brightness: 100,
  contrast: 100,
  unselectedChannels: []
};

export default Image;
