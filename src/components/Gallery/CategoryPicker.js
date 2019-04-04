import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CategoryPicker extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { categoryPickerOpen } = this.props;

    return categoryPickerOpen ? <div>hahaha</div> : null;
  }
}
