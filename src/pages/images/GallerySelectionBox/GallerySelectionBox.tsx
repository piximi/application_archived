import * as React from 'react';
import '../Gallery/Gallery.css';
import { reCalc } from '../helper';

type Props = {
  selectionBoxCoordinates: {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
  };
  visibility: any;
};

const GallerySelectionBox = (props: Props) => {
  const [style, setStyle] = React.useState({
    zIndex: 9000,
    position: 'fixed',
    background: '#eaeaea',
    opacity: 0.4,
    border: '0.1em solid',
    borderColor: '#AAAAAA'
  });

  React.useEffect(() => {
    const styleFromBoxCoordinates = reCalc(props.selectionBoxCoordinates);

    const newStyle = {
      ...style,
      ...styleFromBoxCoordinates,
      visibility: props.visibility
    };

    setStyle(newStyle);
  }, [props.selectionBoxCoordinates]);

  React.useEffect(() => {
    const defaultCoordinates = {
      left: '0px',
      top: '0px',
      width: '0px',
      height: '0px'
    };

    const newStyle = {
      ...style,
      ...defaultCoordinates,
      visibility: props.visibility
    };

    setStyle(newStyle);
  }, [props.visibility]);

  // return <div style={style} />;

  return <div />;
};

export default GallerySelectionBox;
