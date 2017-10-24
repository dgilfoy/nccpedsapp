import * as React from 'react';
import ExternalLink from '../ExternalLink';
import {shallow} from 'enzyme';

describe('External Link Component', () => {
  
  it('Should load the link for the given path when clicked', () => {
    const pageDisplay = shallow(
      <ExternalLink absolutePath="https://google.com"/>
    );
    pageDisplay.instance();
  });
});