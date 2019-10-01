import * as React from 'react';
import '../Gallery/Gallery.css';
import { reCalc } from '../helper';

type GallerySelectionBoxProps = {
  selectionBoxCoordinates: {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
  };
  visibility: any;
};

export const GallerySelectionBox = (props: GallerySelectionBoxProps) => {
  const { selectionBoxCoordinates, visibility } = props;

  const [style, setStyle] = React.useState({
    zIndex: 1,
    position: 'fixed' as 'fixed',
    background: '#eaeaea',
    opacity: 0.4,
    border: '0.1em solid',
    borderColor: '#AAAAAA'
  });

  React.useEffect(() => {
    const styleFromBoxCoordinates = reCalc(selectionBoxCoordinates);
    const newStyle = {
      ...style,
      ...styleFromBoxCoordinates,
      visibility: visibility
    };

    //setStyle(newStyle);
  }, [selectionBoxCoordinates, style, visibility]);

  // React.useEffect(() => {
  //   const defaultCoordinates = {
  //     left: '0px',
  //     top: '0px',
  //     width: '0px',
  //     height: '0px'
  //   };

  //   const newStyle = {
  //     ...style,
  //     ...defaultCoordinates,
  //     visibility: visibility
  //   };

  //   setStyle(newStyle);
  // }, [selectionBoxCoordinates, style, visibility]);

  return <div style={style} />;
};
