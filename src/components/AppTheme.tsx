/**
 * @file AppTheme.tsx
 * 
 * Name: AppTheme.tsx
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
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PhoneDirectoryPage from '../pages/PhoneDirectoryPage';
import BadgeExtrasPage from '../pages/BadgeExtrasPage';
import OnCallListPage from '../pages/OnCallListPage';
import MoreInformationPage from '../pages/MoreInformationPage';
import ResourcesPage from '../pages/ResourcesPage';
import ScutdogPage from '../pages/ScutdogPage';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import BasicPage from '../containers/BasicPage';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card,CardActions, CardHeader, CardText} from 'material-ui/Card';
import * as CryptoJS from "crypto-js";
import {passPhrase, passKey} from '../res/data/secPassPhrase';
import {ActionInfoOutline} from 'material-ui/svg-icons';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const capitolBkgrd = require('../res/images/capitol-building-with-logo.png');
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
  params,
  isAuthenticated
}

export interface State {
  screen:{width: number, height: number},
  inputValue : any,
  isAuthenticated : boolean,
  popoverOpen : boolean
}

class App extends React.Component<Props, State>{
  constructor(props){
    super(props);
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
  /**
   * 
   */
  componentWillMount(){
    let storage = window.localStorage,
      authToken =  storage.getItem('isAuthenticated'),
        isAuthBool = false;
      if(authToken === 'true'){
        isAuthBool = true;
      }

    this.setState({
      screen: this.getScreenDimensions(),
      inputValue : '',
      isAuthenticated : isAuthBool,
      popoverOpen : false
    });
  }
  /**
   * 
   * 
   * @memberof App
   */
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
   * 
   * 
   * @param {any} e - event object
   * @memberof App
   */
  submitPass( e ) {
    // set the datastore "is authenticated" to be true if the passPhrase is correct
    let uepp = CryptoJS.AES.decrypt(passPhrase,passKey).toString(CryptoJS.enc.Utf8);
    //console.log(CryptoJS.AES.encrypt(passPhrase,passKey); 
    if(this.state.inputValue == uepp ){

      let storage = window.localStorage;
      
      storage.setItem('isAuthenticated', 'true');
        
      this.setState(prevState => ({
        isAuthenticated : true
      }));
    }
  }
  /**
   * 
   * 
   * @param {any} e 
   * @memberof App
   */
  updateInputValue(e){
    e.persist();
    this.setState(prevState => ({
      inputValue : e.target.value
    }));
  }
  /**
   *  renders the componenent for the app
   * 
   * @memberof App
   */
  renderRouteComponent = (Component) => {

    return () => {  
      return (
        <div>
          <BasicPage>
            <Component appPage={this.getAppPageObject()} />
          </BasicPage>
        </div>
      );
    };
  }
  /**
   * 
   * 
   * @param {any} event 
   * @memberof App
   */
  handleRequestClose(event){
    event.persist();
    this.setState(prevState => ({
      popoverOpen : false
    }));
  }
  /**
   * 
   * 
   * @memberof App
   */
  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState(prevState => ({
      popoverOpen: true
    }));
  }
  /**
   * 
   * 
   * @memberof App
   */
  splashScreen = () => {
    const ssCardStyles = {
      height : this.state.screen.height,
      backgroundColor: '#043365',
      background: "linear-gradient(to bottom, #043365 0%,#094A8F 40%,#106fce 100%)",
      paddingTop: this.state.screen.height/5
    }
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        onClick={this.handleRequestClose.bind(this)}
      />
    ];
    return (
      <div style={{maxWidth:'800px'}}>
        <Card style={ssCardStyles}>
            <CardHeader
              style={{width:'85%',margin:'0 auto',display:'block',textAlign:'center',maxWidth:'800px'}}
              titleStyle={{textAlign:'center',fontSize:'25px',display:'block',width:'100%'}}
              titleColor='#fff'
              textStyle={{width:'98%'}}
              title="Military Peds App"
            />
            <CardText>
              <div style={{width:'85%',margin:'0 auto',maxWidth:'800px'}}>
                <TextField
                  id="passPhrase"
                  hintText="Enter the passphrase to continue"
                  value={this.state.inputValue}
                  onChange={this.updateInputValue.bind(this)}
                  inputStyle={{backgroundColor:'#fff', border:'1px solid red'}}
                  fullWidth={true}
                />
              <p style={{color:'#fff', textAlign:'center'}}>
                Pass Phrase <ActionInfoOutline style={{color:'#fff', marginLeft:'20px',marginRight:'5px'}} onClick={this.handleTouchTap.bind(this)}/>  
                <span style={{fontSize:'10px',color:'#fff'}}> Where do I get a pass phrase?</span> 
              </p>
              <CardActions style={{width:'40%',margin:'0 auto', maxWidth:'200px'}}>
                <RaisedButton 
                  style={{width:'90%',margin:'0 auto', padding:'10px 0', border:'1px solid red'}}
                  label="Submit" 
                  onClick={this.submitPass.bind(this)} />
              </CardActions>
            </div>
            </CardText>
            <Dialog
              open={this.state.popoverOpen}
              onRequestClose={this.handleRequestClose.bind(this)}
              actions={actions}
            >
              <p>Contact a supervisor within the Department of Pediatrics or call <a href="tel:301-319-5437" target="_system">301-319-5437</a></p> 
            </Dialog>
          </Card>
          <img style={{width:'100%',maxWidth:'800px', bottom:'0',position:'absolute'}} src={capitolBkgrd}/>
      </div>
    )
  }
  /**
   * 
   * 
   * @returns 
   * @memberof App
   */
  setOtherRoutes(){
    return (
      <div>
        <Route exact path="/" render={this.renderRouteComponent(HomePage)} />
        <Route path="/directory" render={this.renderRouteComponent(PhoneDirectoryPage)} />
        <Route path="/more-info" render={this.renderRouteComponent(MoreInformationPage)} />
        <Route path="/oncall" render={this.renderRouteComponent(OnCallListPage)} />
        <Route path="/badge-extras" render={this.renderRouteComponent(BadgeExtrasPage)} />
        <Route path="/resources" render={this.renderRouteComponent(ResourcesPage)} />
        <Route path="/scutdogs" render={this.renderRouteComponent(ScutdogPage)} />
      </div>
    )
  }
  /**
   * Routing for the app
   * 
   * @returns 
   * @memberof App
   */
  render(){
    return <MuiThemeProvider muiTheme={muiTheme}>  
      {this.state.isAuthenticated ? this.setOtherRoutes() : <Route path="/" render={this.splashScreen} />}
    </MuiThemeProvider>;
 
  }
}

export default withRouter(App);