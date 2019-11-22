import * as React from 'react';
import { SyntheticEvent } from 'react';

const Image = (props: {
  src?: any;
  openImageViewerDialog?: any;
  id?: any;
  height?: any;
  width?: any;
  brightness?: any;
  contrast?: any;
}) => {
  const { src, openImageViewerDialog, id } = props;

  const [imageStatus, setImageStatus] = React.useState('loading');
  const [image, setImage] = React.useState(null);
  const [imageHeight, setImageHeight] = React.useState(null);
  const [imageWidth, setImageWidth] = React.useState(null);

  let canvasRef = React.useRef();

  const onLoad = (e: SyntheticEvent) => {
    const image = e.target;
    // @ts-ignore
    const width = image.width;
    // @ts-ignore
    const height = image.height;
    setImageStatus('loaded');
    // @ts-ignore
    setImage(image);
    setImageHeight(height);
    setImageWidth(width);
    // @ts-ignore
    image.style.height = '0px';
  };

  // Draw canvas
  const draw = () => {
    if (imageStatus === 'loaded') {
      const canvas = canvasRef.current;
      // @ts-ignore
      const context = canvas.getContext('2d');
      // @ts-ignore
      canvas.height = props.height * 0.9;
      // @ts-ignore
      canvas.width = props.width * 0.9;

      const ratio = Math.min(
        // @ts-ignore
        canvas.width / imageWidth,
        // @ts-ignore
        canvas.height / imageHeight
      );

      // @ts-ignore
      canvas.height = imageHeight * ratio;
      // @ts-ignore
      canvas.width = imageWidth * ratio;

      // Apply filters to context
      context.filter =
        'brightness(' +
        props.brightness +
        '%)  contrast(' +
        props.contrast +
        '%)';

      // @ts-ignore
      context.drawImage(image, 0, 0, canvas.width, canvas.height);

      // @ts-ignore
      image.crossOrigin = 'Anonymous';

      // @ts-ignore
      image.setAttribute('crossOrigin', '');

      // FIXME: Sat Jun 15 (Allen)
      // Apply selected channel filter
      // const pixel = context.getImageData(0, 0, canvas.width, canvas.height);
      // let data = pixel.data;
      // selectVisibleChannels(data, props.unselectedChannels);
      // context.putImageData(pixel, 0, 0);
    }
  };

  // const selectVisibleChannels = (imageData, nonVisibleChannels) => {
  //   for (let i = 0; i < imageData.length; i += 4) {
  //     for (let j = 0; j < 4; j += 1) {
  //       if (nonVisibleChannels.includes(j)) imageData[j + i] = 0;
  //     }
  //   }
  // };

  React.useEffect(() => {
    draw();
  });

  return (
    <div>
      <canvas
        // @ts-ignore
        type={'selectableElement'}
        onDoubleClick={openImageViewerDialog}
        // @ts-ignore
        imgid={id}
        style={{ verticalAlign: 'middle', padding: '2px' }}
        // @ts-ignore
        ref={canvasRef}
        height={props.height}
        width={props.width}
      />
      <img
        onLoad={onLoad}
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
