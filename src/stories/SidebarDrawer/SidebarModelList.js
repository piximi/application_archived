import React from 'react';
import { storiesOf } from '@storybook/react';
import SidebarModelList from '../../pages/images/SidebarModelList/SidebarModelList';

storiesOf('SidebarModelList', module).add('default', () => (
  <SidebarModelList categories={[]} images={[]} />
));
