/**
 * @file index.tsx
 * 
 * Name: index.tsx
 * 
 * Main entry point into the app
 * 
 * Modified by Daniel Gilfoy <daniel.gilfoy@tee2.org> on 7/25/2017.
 *
 * NCC Pediatrics Cordova App
 *
 * Copyright © 2009-2017 United States Government as represented by
 * the Chief Information Officer of the National Center for Telehealth
 * and Technology. All Rights Reserved.
 *
 * Copyright © 2009-2017 Contributors. All Rights Reserved.
 *
 * THIS OPEN SOURCE AGREEMENT ("AGREEMENT") DEFINES THE RIGHTS OF USE,
 * REPRODUCTION, DISTRIBUTION, MODIFICATION AND REDISTRIBUTION OF CERTAIN
 * COMPUTER SOFTWARE ORIGINALLY RELEASED BY THE UNITED STATES GOVERNMENT
 * AS REPRESENTED BY THE GOVERNMENT AGENCY LISTED BELOW ("GOVERNMENT AGENCY").
 * THE UNITED STATES GOVERNMENT, AS REPRESENTED BY GOVERNMENT AGENCY, IS AN
 * INTENDED THIRD-PARTY BENEFICIARY OF ALL SUBSEQUENT DISTRIBUTIONS OR
 * REDISTRIBUTIONS OF THE SUBJECT SOFTWARE. ANYONE WHO USES, REPRODUCES,
 * DISTRIBUTES, MODIFIES OR REDISTRIBUTES THE SUBJECT SOFTWARE, AS DEFINED
 * HEREIN, OR ANY PART THEREOF, IS, BY THAT ACTION, ACCEPTING IN FULL THE
 * RESPONSIBILITIES AND OBLIGATIONS CONTAINED IN THIS AGREEMENT.
 *
 * Government Agency: The National Center for Telehealth and Technology
 * User Registration Requested. Please send email
 * with your contact information to: robert.a.kayl.civ@mail.mil
 * Government Agency Point of Contact for
 * Original Software: robert.a.kayl.civ@mail.mil
 */ 
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import * as React from 'react';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
OfflinePluginRuntime.install();
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/AppTheme';
import reducer from './reducers';

injectTapEventPlugin();
require('./index.html'); //load and emit index.html

const thunkArgs = {
  isCordova: __IS_CORDOVA_BUILD__
}
const store = createStore(reducer,applyMiddleware(thunk.withExtraArgument(thunkArgs)));

store.subscribe(() => {
   //console.log(store.getState()); // list entire state of app
});

if(__IS_CORDOVA_BUILD__){
  // seems to have issues with ios, commenting out for now.
  //store.dispatch(fetchVersion());
}

// creates the render for the app and passes the store into the Provider.
const render = (Component: any) => {
    ReactDOM.render(
        <AppContainer>
          <Provider store={store}>
            <HashRouter>
              <Component />
            </HashRouter>
          </Provider>
        </AppContainer>,
        document.getElementById("spaApp")
    );
}
// renders the app. If it's cordova, wait until the device is ready.
if(__IS_CORDOVA_BUILD__){
  document.addEventListener("deviceready", function(){
    // document.addEventListener("menubutton", onMenuKeyDown, false);
    render(App);
  })
} else {
  render(App);
  // Hot Module Replacement API. Only used when running the dev server.
  if ((module as any).hot) {
    (module as any).hot.accept('./components/AppTheme', () => {
      render(App);
    });
  }
}