import * as React from 'react';
import MoreInformationPage from '../MoreInformationPage';
import {shallow} from 'enzyme';

describe('More Information Page', () => {
  
  it('Should load the page for display of the More Information screen', () => {
    const pageDisplay = shallow(
      <MoreInformationPage/>
    );
    pageDisplay.instance();
  });
});