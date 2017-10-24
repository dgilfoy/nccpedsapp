import * as React from 'react';
import AppLogoBar from '../AppLogoBar';
import {shallow} from 'enzyme';

describe('App Logo Bar Component', () => {
  
  it('Should load the logo for the requesting component', () => {
    const pageDisplay = shallow(
      <AppLogoBar hasPaddingTop={false}/>
    );
    pageDisplay.instance();
  });
});