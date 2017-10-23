import * as React from 'react';
import BadgeExtrasPage from '../BadgeExtrasPage';
import {shallow} from 'enzyme';

describe('BadgeExtras Page', () => {
  
  it('Should load the BadgeExtras Page', () => {
    const pageDisplay = shallow(
      <BadgeExtrasPage/>
    );
    pageDisplay.instance();
  });
});