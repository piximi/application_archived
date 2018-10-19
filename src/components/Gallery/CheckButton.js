import PropTypes from 'prop-types';
import React, { Component } from 'react';
import LabelIcon from '@material-ui/icons/Label';
import LabelOutlineIcon from '@material-ui/icons/LabelOutline';

class CheckButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: true
    };

    this.fill = this.fill.bind(this);
    this.visibility = this.visibility.bind(this);
  }

  fill() {
    if (this.props.isSelected) return this.props.selectedColor;
    else if (this.state.hover) return this.props.hoverColor;
    return this.props.color;
  }

  visibility() {
    if (
      this.props.isSelected ||
      (this.props.isSelectable && this.props.parentHover)
    )
      return 'visible';
    return 'hidden';
  }

  render() {
    let icon =
      this.props.isSelected === true ? (
        <LabelIcon style={{ color: this.props.color }} />
      ) : (
        <LabelOutlineIcon style={{ color: this.props.color }} />
      );

    return (
      <div
        title="Select"
        style={{
          background: 'none',
          float: 'left',
          width: '36px',
          height: '36px',
          border: 'none',
          padding: '6px',
          cursor: 'pointer',
          pointerEvents: 'visible'
        }}
        onClick={
          this.props.onClick
            ? e => this.props.onClick(this.props.index, e)
            : null
        }
        onMouseOver={e => this.setState({ hover: true })}
        onMouseOut={e => this.setState({ hover: true })}
      >
        {icon}
      </div>
    );
  }
}

CheckButton.propTypes = {
  index: PropTypes.number,
  color: PropTypes.string,
  isSelectable: PropTypes.bool,
  isSelected: PropTypes.bool,
  selectedColor: PropTypes.string,
  parentHover: PropTypes.bool,
  hover: PropTypes.bool,
  hoverColor: PropTypes.string,
  onClick: PropTypes.func
};

CheckButton.defaultProps = {
  isSelectable: true,
  isSelected: false,
  parentHover: false,
  hover: false
};

export default CheckButton;
