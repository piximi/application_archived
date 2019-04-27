import React from 'react';
import Checkbox from '@material-ui/core/Checkbox/index';

class ChannelSelection extends React.Component {
  state = {
    0: true,
    1: true,
    2: true
  };

  static getDerivedStateFromProps(props, state) {
    let channelState = { ...state };
    for (let channel of props.unselectedChannels) {
      if (channelState[channel] === true) channelState[channel] = false;
    }
    return channelState;
  }

  onChange = name => event => {
    const selectState = { ...this.state };
    let currentlyUnselected = [];
    selectState[Number(name)] = !selectState[Number(name)];
    for (let channel in selectState) {
      if (selectState[channel] === false)
        currentlyUnselected.push(Number(channel));
    }
    this.setState(selectState);
    this.props.setUnselectedChannels(currentlyUnselected);
  };

  render() {
    return (
      <div>
        <Checkbox
          checked={this.state[0]}
          onChange={this.onChange(0)}
          value={'0'}
        />
        <Checkbox
          checked={this.state[1]}
          onChange={this.onChange(1)}
          value={'1'}
        />
        <Checkbox
          checked={this.state[2]}
          onChange={this.onChange(2)}
          value={'2'}
        />
      </div>
    );
  }
}

export default ChannelSelection;
