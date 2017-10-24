import * as React from 'react';
import AppTheme from '../AppTheme';
import {shallow} from 'enzyme';

describe('App Theme Component, main entry point into the app', () => {
  
  it('Should load the data for the page', () => {
    const pageDisplay = shallow(
      <AppTheme/>
    );
    pageDisplay.instance();
  });
});