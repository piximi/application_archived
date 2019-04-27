import * as React from 'react';
import * as tfvis from '@tensorflow/tfjs-vis/dist/index';

const ConfusionMatrix = props => {
  const containerRef = React.useRef();

  React.useEffect(() => {
    tfvis.render.confusionMatrix(containerRef.current, props.data, {
      width: '400'
    });
  }, [props.data]);

  return <div className="confusion-matrix-root" ref={containerRef} />;
};

export default ConfusionMatrix;
