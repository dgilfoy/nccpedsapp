/**
 * @file AppTheme.tsx
 * 
 
 * Name: AppTheme.tsx
 * 
 *
 * Modified by Daniel Gilfoy <daniel.gilfoy@tee2.org> on 7/25/2017.
 *
 * Navy MSC Cordova App
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
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PhoneDirectoryPage from '../pages/PhoneDirectoryPage';
import BadgeExtrasPage from '../pages/BadgeExtrasPage';
import OnCallListPage from '../pages/BadgeExtrasPage';
import ResourcesPage from '../pages/ResourcesPage';
import PdfViewerPage from '../pages/PdfViewerPage';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import BasicPage from '../containers/BasicPage';

const muiTheme = getMuiTheme({
  palette: {
    
    textColor: '#000000',
    primary1Color: '#000000',
    primary2Color: '#1b4583',
    primary3Color: '#1b4583'

  },
  appBar: {
    height: 50,
  },
});

export interface AppPageInterface {
  screen:{width: number, height: number}
}
export interface Props {
  params
}

export interface State {
  screen:{width: number, height: number}
}
class App extends React.Component<Props, State>{
  constructor(props){
    super(props);
    this.state = {
      screen: this.getScreenDimensions(),
    }
  }
  /**
   * 
   * 
   * @memberof App
   */
  getAppPageObject = ():AppPageInterface => {
    return {
      screen: this.state.screen
    }
  }

  componentDidMount(){
    this.handlePageResize();
  }
  /**
   * 
   * 
   * @memberof App
   */
  getScreenDimensions = () => {
    return {
       width: window.innerWidth,
       height: window.innerHeight
    }
  }
  /**
   * 
   * 
   * @memberof App
   */
  hasScreenChanged = () => {
    const {width, height} = this.state.screen;
    const currentDims = this.getScreenDimensions();

    if(width !== currentDims.width){
      return true;
    }
    if(height !== currentDims.height){
      return true;
    }
    return false;
  }
  /**
   * sets the size of the screen
   * 
   * @memberof App
   */
  handlePageResize = () => {
    let resizeTimeoutId = null;
    window.onresize = () => {
      if(resizeTimeoutId){
        clearTimeout(resizeTimeoutId);
      }
      if(this.hasScreenChanged()){
        resizeTimeoutId = setTimeout(
          () => {
            
            this.setState({
              screen: this.getScreenDimensions()
            }); 
            
          },
        500);
      }
    }
  }
  /**
   *  renders the componenent for the app
   * 
   * @memberof App
   */
  renderRouteComponent = (Component) => {

    return () => {  
      return (
        <BasicPage>
          <Component appPage={this.getAppPageObject()} />
        </BasicPage>
      );
    };
  }
  /**
   * Routing for the app
   * 
   * @returns 
   * @memberof App
   */
  render(){
    //<Route exact path="/pdf/:file" render={this.renderRouteComponent(PdfViewerPage)} />
    return <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <div style={{padding: '0px'}}>
        <Route exact path="/" render={this.renderRouteComponent(HomePage)} />
        <Route path="/directory" render={this.renderRouteComponent(PhoneDirectoryPage)} />
        <Route path="/oncall" render={this.renderRouteComponent(OnCallListPage)} />
        <Route path="/badge-extras" render={this.renderRouteComponent(BadgeExtrasPage)} />
        <Route path="/resources" render={this.renderRouteComponent(ResourcesPage)} />
        <Route exact path="/pdf/:file" render={this.renderRouteComponent(PdfViewerPage)} />
      </div>
    </div>
    </MuiThemeProvider>;
 
  }
}

export default withRouter(App);