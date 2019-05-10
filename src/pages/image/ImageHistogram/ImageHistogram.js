import * as React from 'react';
import * as d3 from 'd3';

const ImageHistogram = props => {
  const canvasRef = React.useRef();
  const nodeRef = React.useRef();

  const { channels, src, brightness, contrast } = props;

  const [data, setData] = React.useState([]); // eslint-disable-line no-unused-vars

  React.useEffect(() => {
    const createHistogram = imgData => {
      let W = 300;
      let H = 300;
      const svg = d3.select(nodeRef.current);
      const margin = { top: 20, right: 44, bottom: 20, left: 0 };
      const width = W - margin.left - margin.right;
      const height = H - margin.top - margin.bottom;
      let yAxis = true;
      let q = document.querySelector('svg');
      q.style.width = width;
      q.style.height = height;
      if (yAxis) {
        d3.selectAll('g.y-axis').remove();
      }

      const graphComponent = (imgData, color) => {
        var data = Object.keys(imgData).map(function(key) {
          return { freq: imgData[key], idx: +key };
        });
        var x = d3
          .scaleLinear()
          .range([0, width])
          .domain([
            0,
            d3.max(data, function(d) {
              return d.idx;
            })
          ]);
        var y = d3
          .scaleLinear()
          .range([height, 0])
          .domain([
            0,
            d3.max(data, function(d) {
              return d.freq;
            })
          ]);
        var g = svg
          .append('g')
          .attr(
            'transform',
            'translate(' + margin.left + ',' + margin.top + ')'
          );
        if (!yAxis) {
          yAxis = true;
          g.append('g')
            .attr('class', 'y-axis')
            .attr('transform', 'translate(' + -5 + ',0)')
            .call(
              d3
                .axisLeft(y)
                .ticks(10)
                .tickSizeInner(10)
                .tickSizeOuter(2)
            );
        }

        g.selectAll('.bar-' + color)
          .data(data)
          .enter()
          .append('rect')
          .attr('class', 'bar-' + color)
          .attr('fill', color)
          .attr('x', function(d) {
            return x(d.idx);
          })
          .attr('y', function(d) {
            return y(d.freq);
          })
          .attr('width', 2)
          .attr('opacity', 0.8)
          .attr('height', function(d) {
            return height - y(d.freq);
          });
      };

      if (channels.includes(0)) {
        d3.selectAll('.bar-red').remove();
      } else {
        graphComponent(imgData.rD, 'red');
      }

      if (channels.includes(1)) {
        d3.selectAll('.bar-green').remove();
      } else {
        graphComponent(imgData.gD, 'green');
      }

      if (channels.includes(2)) {
        d3.selectAll('.bar-blue').remove();
      } else {
        graphComponent(imgData.bD, 'blue');
      }
    };

    const createPlottableData = imageData => {
      let rD = {},
        gD = {},
        bD = {};
      for (let i = 0; i < 256; i++) {
        rD[i] = 0;
        gD[i] = 0;
        bD[i] = 0;
      }

      for (let j = 0; j < imageData.length; j += 4) {
        rD[imageData[j]]++;
        gD[imageData[j + 1]]++;
        bD[imageData[j + 2]]++;
      }
      return { rD, gD, bD };
    };

    let image = new Image();

    image.src = src;

    image.onload = e => {
      const img = e.target;
      const canvas = canvasRef.current;
      canvas.width = img.width;
      canvas.height = img.height;

      const context = canvas.getContext('2d');
      context.drawImage(img, 0, 0, img.width, img.height);

      const imageData = context.getImageData(0, 0, img.width, img.height).data;

      const plottableData = createPlottableData(imageData);

      // Create Histogram
      createHistogram(plottableData);

      setData(plottableData);
    };
  }, [channels, src, brightness, contrast]);

  return (
    <div>
      <canvas
        style={{ display: 'none' }}
        ref={canvasRef}
        height={300}
        width={300}
      />
      <svg style={{ margin: '20px' }} ref={nodeRef} width={300} height={300} />
    </div>
  );
};

export default ImageHistogram;
