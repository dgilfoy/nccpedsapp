import * as React from 'react';
import renderer from 'react-test-renderer';
import AppBar from 'material-ui/AppBar';

describe('App Title Bar renders the component properly', () => {
  // set title test
   it('gets the title of the app bar successfully', () => {
    const titleRendered = renderer.create(
      
    );
    expect(titleRendered.toJSON()).toMatchSnapshot();
  });
  // render the title bar
  it('renders correctly', () => {
    const appTitleBarrendered = renderer.create(
      <AppBar title="test title"/>
    );
    expect(appTitleBarrendered.toJSON()).toMatchSnapshot();
  });
});