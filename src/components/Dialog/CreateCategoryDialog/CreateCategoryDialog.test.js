import React from 'react';
import { shallow } from 'enzyme';
import CreateCategoryDialog from './CreateCategoryDialog';

describe('CreateCategoryDialog', () => {
  it('should render correctly', () => {
    const component = shallow(<CreateCategoryDialog />);
    expect(component).toMatchSnapshot();
  });
});
