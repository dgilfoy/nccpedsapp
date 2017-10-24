import * as React from 'react';
import DashboardPage from '../DashboardPage';
import {shallow} from 'enzyme';

describe('Dashboard Page Container', () => {
  
  it('Should load the data, if any, for the page', () => {
    const pageDisplay = shallow(
      <DashboardPage/>
    );
    pageDisplay.instance();
  });
});