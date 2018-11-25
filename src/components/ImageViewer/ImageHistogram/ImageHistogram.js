import React, { Component } from 'react';
import styles from './ImageHistogram.css';
import { withStyles } from '@material-ui/core/styles';
import { XYPlot, VerticalRectSeries } from 'react-vis';

class ImageHistogram extends Component {
  render() {
    const { classes } = this.props;

    return (
      <XYPlot
        className={classes.xyplot}
        xDomain={[0, 7]}
        width={300}
        height={300}
        stackBy="y"
      >
        <VerticalRectSeries
          data={[
            { x0: 1, x: 2, y: 10 },
            { x0: 2, x: 4, y: 5 },
            { x0: 5, x: 6, y: 15 }
          ]}
        />

        <VerticalRectSeries
          data={[
            { x0: 1, x: 2, y: 12 },
            { x0: 2, x: 4, y: 2 },
            { x0: 5, x: 6, y: 15 }
          ]}
        />
      </XYPlot>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ImageHistogram);
