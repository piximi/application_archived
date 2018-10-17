var listPulseOpacity = 0.2;
var listPulseoBorderWidth = '30px';
var listPulseBackgroundColour = 'rgb(128,0,0)';
var listPulseStartBoxStyle = '0 0 0 0 rgba(204,169,44, 0.4)';
var listPulseEndBoxStyle =
  '0 0 0 ' + listPulseoBorderWidth + ' rgba(204,169,44, 0)';

const styles = theme => ({
  icon: {
    color: 'rgba(0,0,0,0.50)',
    cursor: 'pointer',
    '&:hover': {
      color: 'rgba(0,0,0,0.87)'
    }
  },
  isOver: {
    background: 'rgba(0, 0, 0, 0.20)'
  },
  onDropPulse: {
    animationName: 'pulse',
    webkitAnimationName: 'pulse',
    animationDuration: '1s',
    animationTiming: 'cubic-bezier(0.1,0.7,0.9,0.3)'
  },
  onDropPulse2: {
    animationName: 'pulse2',
    webkitAnimationName: 'pulse2',
    animationDuration: '1s',
    animationTiming: 'cubic-bezier(0.1,0.7,0.9,0.3)'
  },
  '@keyframes pulse': {
    '0%': {
      webkitBoxShadow: listPulseStartBoxStyle,
      boxShadow: listPulseStartBoxStyle
    },
    '25%': {
      background: listPulseBackgroundColour,
      opacity: listPulseOpacity
    },
    '95%': {
      webkitBoxShadow: listPulseEndBoxStyle,
      boxShadow: listPulseEndBoxStyle
    },
    '100%': {
      webkitBoxShadow: listPulseStartBoxStyle,
      boxShadow: listPulseStartBoxStyle
    }
  },
  '@keyframes pulse2': {
    '0%': {
      webkitBoxShadow: listPulseStartBoxStyle,
      boxShadow: listPulseStartBoxStyle
    },
    '25%': {
      background: listPulseBackgroundColour,
      opacity: listPulseOpacity
    },
    '95%': {
      webkitBoxShadow: listPulseEndBoxStyle,
      boxShadow: listPulseEndBoxStyle
    },
    '100%': {
      webkitBoxShadow: listPulseStartBoxStyle,
      boxShadow: listPulseStartBoxStyle
    }
  }
});

export default styles;
