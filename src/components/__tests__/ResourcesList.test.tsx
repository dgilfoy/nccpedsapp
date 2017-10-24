//import * as React from 'react';
//import ResourcesList from '../ResourcesList';
import {shallow} from 'enzyme';

describe('Resources Item Component', () => {
  
  it('Should load the data for the page', () => {
    const pageDisplay = shallow(
      //<ResourcesList/>
    );
    pageDisplay.instance();
  });
});