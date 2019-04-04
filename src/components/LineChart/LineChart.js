import React, { useEffect, useRef } from 'react';
import * as tfvis from '@tensorflow/tfjs-vis';

export function LineChart(props) {
  const containerRef = useRef();

  useEffect(() => {
    tfvis.render.linechart(containerRef.current, props.data, {});
    debugger;
  }, [props.data]);

  return <div className="line-chart-root" ref={containerRef} />;
}
