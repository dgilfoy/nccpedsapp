import * as React from 'react';
import ResourcesItem from '../ResourcesItem';
import {shallow} from 'enzyme';

describe('Resources Item Component', () => {
  
  it('Should load the data for the page', () => {
    const pageDisplay = shallow(
      <ResourcesItem/>
    );
    pageDisplay.instance();
  });
});