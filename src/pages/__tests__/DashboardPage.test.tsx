import * as React from 'react';
import DashboardPage from '../DashboardPage';
import {shallow} from 'enzyme';

describe('Dashboard Page', () => {
  
  it('Should load the Dashboard Page', () => {
    const pageDisplay = shallow(
      <DashboardPage/>
    );
    pageDisplay.instance();
  });
});