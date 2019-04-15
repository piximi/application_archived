import React, { useEffect, useRef } from 'react';
import * as tfvis from '@tensorflow/tfjs-vis';

const LineChart = props => {
  const containerRef = useRef();

  useEffect(() => {
    tfvis.render.linechart(containerRef.current, props.data, {});
  }, [props.data]);

  return <div className="line-chart-root" ref={containerRef} />;
};

export default LineChart;
