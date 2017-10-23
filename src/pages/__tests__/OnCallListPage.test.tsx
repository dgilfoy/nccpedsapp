import * as React from 'react';
import OnCallListPage from '../OnCallListPage';
import {shallow} from 'enzyme';

describe('On Call List Page', () => {
  
  it('Should load the page for display of numbers', () => {
    const pageDisplay = shallow(
      <OnCallListPage/>
    );
    pageDisplay.instance();
  });

  it('Should click to call NICU number', () => {
      
  });

  it('Shoulc click to call PICU number',() => {
      
  });
});
