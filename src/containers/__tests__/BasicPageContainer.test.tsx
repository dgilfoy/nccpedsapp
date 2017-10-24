import * as React from 'react';
import BasicPage from '../BasicPage';
import {shallow} from 'enzyme';

describe('Basic Page Container', () => {
  
  it('Should load the page for display', () => {
    const pageDisplay = shallow(
      <BasicPage/>
    );
    pageDisplay.instance();
  });
});