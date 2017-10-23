import * as React from 'react';
import PhoneDirectoryPage from '../PhoneDirectoryPage';
import {shallow} from 'enzyme';

describe('Phone Directory Page', () => {
  
  it('Should load the page for display of Phone directory listing', () => {
    const pageDisplay = shallow(
      <PhoneDirectoryPage/>
    );
    pageDisplay.instance();
  });

  it('Should click to call up the required phone number', () => {
      
  });

  it('Should click to click the search icon for a search bar to show up', () => {
    
  });

  it('Should click to enter text into the search bar to search for a phone number by name', () => {
    
  });
});