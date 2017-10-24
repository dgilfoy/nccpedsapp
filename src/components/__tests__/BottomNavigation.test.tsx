import * as React from 'react';
import BottomNavigation from '../BottomNavigation';
import {shallow} from 'enzyme';

describe('Bottom Navigation Component', () => {
  
  it('Should load the data for the page', () => {
    const pageDisplay = shallow(
      <BottomNavigation/>
    );
    pageDisplay.instance();
  });
});