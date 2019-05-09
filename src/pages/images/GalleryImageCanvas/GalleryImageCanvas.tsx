import * as React from 'react';

const GalleryImageCanvas = (props: any) => {
  const { height, openImageViewerDialog, width } = props;

  let canvasRef = React.useRef();

  const style = {
    padding: '2px',
    verticalAlign: 'middle'
  };

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

  return (
    <canvas
      height={height}
      onDoubleClick={openImageViewerDialog}
      ref={canvasRef}
      style={style}
      width={width}
    />
  );
};

export default GalleryImageCanvas;
