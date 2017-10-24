import * as React from 'react';
import ResourcesPage from '../ResourcesList';
import {shallow} from 'enzyme';

describe('Resources Page Container', () => {
  
  it('Should load the data for the page', () => {
    const pageDisplay = shallow(
      <ResourcesPage/>
    );
    pageDisplay.instance();
  });
});