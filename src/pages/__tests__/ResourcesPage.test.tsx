import * as React from 'react';
import ResourcesPage from '../ResourcesPage';
import {shallow} from 'enzyme';

describe('CPG/Algorithm pdf listing Page', () => {
  
  it('Should load the page for display of cpg/algorithm pdfs', () => {
    const pageDisplay = shallow(
      <ResourcesPage/>
    );
    pageDisplay.instance();
  });

  it('Should click to load up the required pdf', () => {
      
  });
});