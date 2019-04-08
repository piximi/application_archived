import React from 'react';
import { storiesOf } from '@storybook/react';
import SidebarModelList from '../../components/SidebarDrawer/SidebarModelList/SidebarModelList';

storiesOf('SidebarModelList', module).add('default', () => (
  <SidebarModelList categories={[]} images={[]} />
));
