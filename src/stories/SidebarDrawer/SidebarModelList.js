import React from 'react';
import { storiesOf } from '@storybook/react';
import SidebarModelList from '../../pages/images/SidebarDrawer/SidebarModelList/SidebarModelList';

storiesOf('SidebarModelList', module).add('default', () => (
  <SidebarModelList categories={[]} images={[]} />
));
