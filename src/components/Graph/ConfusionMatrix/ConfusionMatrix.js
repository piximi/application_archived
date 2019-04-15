import React, { useEffect, useRef } from 'react';
import * as tfvis from '@tensorflow/tfjs-vis';

const ConfusionMatrix = props => {
  const containerRef = useRef();

  useEffect(() => {
    tfvis.render.confusionMatrix(containerRef.current, props.data, {
      width: '400'
    });
  }, [props.data]);

  return <div className="confusion-matrix-root" ref={containerRef} />;
};

export default ConfusionMatrix;
