import React, { useEffect, useRef } from 'react';
import * as tfvis from '@tensorflow/tfjs-vis';

export function ConfusionMatrix(props) {
  const containerRef = useRef();

  useEffect(() => {
    tfvis.render.confusionMatrix(containerRef.current, props.data, {});
  }, [props.data]);

  return <div className="confusion-matrix-root" ref={containerRef} />;
}
