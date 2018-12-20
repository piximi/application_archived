import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

class Checkboxes extends React.PureComponent {
  state = {
    0: true,
    1: true,
    2: true
  };

  static getDerivedStateFromProps(props, state) {
    let unselectedChannels = { ...state };
    for (let channel in props.unselectedChannels) {
      unselectedChannels[channel] = false;
    }
    return unselectedChannels;
  }

  handleChange = name => event => {
    const selectState = { ...this.state };
    selectState[Number(name)] = event.target.checked;
    this.setState(selectState);
    let currentlyUnselected = [];
    for (let channel in selectState) {
      if (selectState[channel] === false)
        currentlyUnselected.push(Number(channel));
    }
    this.props.setUnselectedChannels(currentlyUnselected);
  };

  render() {
    return (
      <div>
        <Checkbox
          checked={this.state[0]}
          onChange={this.handleChange(0)}
          value={'0'}
        />
        <Checkbox
          checked={this.state[1]}
          onChange={this.handleChange(1)}
          value={'1'}
        />
        <Checkbox
          checked={this.state[2]}
          onChange={this.handleChange(2)}
          value={'2'}
        />
      </div>
    );
  }
}

export default Checkboxes;
