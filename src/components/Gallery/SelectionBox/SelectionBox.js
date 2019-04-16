import * as React from 'react';
import '../Gallery/Gallery.css';
import { reCalc } from '../helper';

const SelectionBox = props => {
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
  });

  return <div style={style} />;
};

export default SelectionBox;
