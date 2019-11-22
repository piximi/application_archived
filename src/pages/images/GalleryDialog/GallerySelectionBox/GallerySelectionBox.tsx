import * as React from 'react';
import { reCalc } from '../utilities';

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

  const styleFromBoxCoordinates = reCalc(selectionBoxCoordinates);

  const newStyle = {
    ...style,
    ...styleFromBoxCoordinates,
    visibility: visibility
  };

  React.useEffect(() => {
    setStyle(newStyle);
  }, [selectionBoxCoordinates, visibility]);

  return <div style={style} />;
};
