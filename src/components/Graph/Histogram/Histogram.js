import * as React from 'react';
import * as tfvis from '@tensorflow/tfjs-vis';

const Histogram = props => {
  const containerRef = React.useRef();

  React.useEffect(() => {
    tfvis.render.histogram(containerRef.current, props.data, {
      width: '400'
    });
  }, [props.data]);

  return <div className="histogram-root" ref={containerRef} />;
};

export default Histogram;
