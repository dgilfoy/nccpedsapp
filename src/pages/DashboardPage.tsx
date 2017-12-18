/**
 * @file DashboardPage.tsx
 * File in charge of Displaying the home page or "Dashboard"
 
 * Name: DashboardPage.ts
 * Purpose of this file is to provide the view for the main page of the app -  or it's dashboard
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
import AppLogoBar  from '../components/AppLogoBar';
import {AppPageInterface} from '../components/AppTheme';
import {
  buttonRowSpacing,
  buttonsWrapper,
  versionStyle,
  smallImageLeft,
  smallImageRight
} from '../styles/dashboardStyles';
import {getPDF} from '../actions/_helper';
import RaisedButton from 'material-ui/RaisedButton';
import {MapsLocalPhone, CommunicationRingVolume, ActionVerifiedUser, ActionBookmark, ActionBook} from 'material-ui/svg-icons';
import BottomNavigationComp from '../components/BottomNavigation';

const logoLarge = require('../res/images/logoLarge.png');

export interface Props {
  appPage: AppPageInterface;
}
export interface State {
  screen:{width: number, height: number}
}
const cpgSVGIcon = require('../res/images/CPG_white.svg');

class DashboardPage extends React.Component<Props, State>{
  componentWillMount(){
    this.setState({screen:{
      width : this.props.appPage.screen.width,
      height : this.props.appPage.screen.height
    }});
  }
  /**
   * 
   * 
   * @returns 
   * @memberof DashboardPage
   */
  setMaxHeight(){
    let scrHeight = this.props.appPage.screen.height,
      multi = ( scrHeight > 700 ) ? .65 : .59;
    return ( scrHeight * multi );
  }
  buttonWrapperStyle(){
    let screenWidth = this.props.appPage.screen.width,
      style = {
        textAlign : 'center',
        marginTop : '20px', 
        width : '100px',
        minHeight : '100px'
      },
    containerWidth = ( screenWidth > 800) ? 640 : screenWidth*.8;
    if( containerWidth < 420 ){
      let notFullWidth = .5 * containerWidth;
      style.width = notFullWidth + 'px';
    }else{
      let fullWidth = .30 * containerWidth;
      style.width = fullWidth + 'px';
    }
    return style;
  }
  dbGoTo(url,external=false){
    if( external ){
      return window.open(url,'_system')
    }else{
      this.props['history'].push(url);
    }
  }
  badgeExtrasIcon(){
    return(
      <div>
        <ActionVerifiedUser style={{color:'#fff',height:'40px',width:'40px',position:'relative',top:'-25px',marginLeft:'-15px'}}/><br/>
      </div>
    )
  }
  cpgAlgIcon(){
    return(
      <div style={{marginLeft:'-10px'}}>
        <img style={{height:'40px',width:'40px', margin:'-25px auto 25px'}} src={cpgSVGIcon} /><br/>
      </div>
    )
  }
  scutdogIcon(){
    return(
      <div>
        <ActionBook style={{color:'#fff',height:'40px',width:'40px',position:'relative',top:'-25px',marginLeft:'-15px'}}/><br/>
      </div>
    )
  }
  phoneIcon(){
    return (
      <div>
        <MapsLocalPhone style={{color:'#fff',height:'40px',width:'40px',position:'relative',top:'-25px',marginLeft:'-15px'}}/><br/>
      </div>
    )
  }
  phoneIcon2(){
    return(
      <div>
        <CommunicationRingVolume style={{color:'#fff',height:'40px',width:'40px',position:'relative',top:'-25px',marginLeft:'-15px'}}/><br/>
      </div>
    )
  }
  relayhealthIcon(){
    return (
      <div>
        <ActionBookmark style={{color:'#fff',height:'40px',width:'40px',position:'relative',top:'-25px',marginLeft:'-15px'}}/>
      </div>
    )
  }
  render(){
    //@todo move all of my styles to a folder and do imports and/or use combines
    const buttonWrapperMinHeight = {
      minHeight: this.setMaxHeight()
    }
    const buttonItemWrapper = this.buttonWrapperStyle();
    const raisedButtonStyles = {
      padding:'0 0 5px 0', 
      height:parseInt(buttonItemWrapper.width) *.85, 
      backgroundColor:'#043365',
      background: 'linear-gradient(to bottom, #0062CF 0%,#094A8F 45%,#0E5DB5 60%,#003168 100%)',
      border : '3px groove rgba(161, 15, 30,0.75)',
      lineHeight : '14px',
    }
    const buttonLabelStyles = {
      textAlign:'center',
      lineHeight: '15px'
    }
    return (
      <div style={{position:'relative', background: 'url(' + logoLarge + ') bottom center no-repeat', height:this.props.appPage.screen.height-10}}>
       <AppLogoBar hasPaddingTop={false}/>
        <div style={{...buttonsWrapper,...buttonWrapperMinHeight}}>
          <div style={buttonRowSpacing} className="clearfix rowWrapper">
              <div style={{...buttonItemWrapper,...smallImageLeft}}>
                <RaisedButton
                  icon={this.phoneIcon()} 
                  label="Admit Phone" 
                  onClick={()=>{this.dbGoTo('tel:+3016767337',true)} }
                  fullWidth={true}
                  buttonStyle={raisedButtonStyles}
                  labelColor={'#fff'}
                  labelStyle={{buttonLabelStyles,...{fontSize:'14px',padding:0}}}
                />
              </div>
              <div style={{...buttonItemWrapper,...smallImageRight}}>
              <RaisedButton 
                  icon={this.phoneIcon2()} 
                  label="Page On-Call Providers" 
                  onClick={()=>{this.dbGoTo('/oncall',false)} }
                  fullWidth={true}
                  buttonStyle={raisedButtonStyles}
                  labelColor={'#fff'}
                  labelStyle={{buttonLabelStyles,...{fontSize:'14px',padding:0}}}
                />
              </div>
            </div>
            <div style={buttonRowSpacing} className="clearfix rowWrapper">
              <div style={{...buttonItemWrapper,...smallImageLeft}}>
              <RaisedButton 
                  icon={this.cpgAlgIcon()}
                  label="CPG / Algorithms" 
                  onClick={()=>{this.dbGoTo('/resources',false)} }
                  fullWidth={true}
                  buttonStyle={raisedButtonStyles}
                  labelColor={'#fff'}
                  labelStyle={{buttonLabelStyles,...{fontSize:'14px',padding:0}}}
                />
              </div>
              <div style={{...buttonItemWrapper,...smallImageRight}}>
                <div style={{cursor:'pointer'}}>
                <RaisedButton 
                  icon={this.badgeExtrasIcon()}
                  label="Virtual Badge" 
                  onClick={()=>{getPDF(require('../res/files/WR-Emerg-Code-Badge.pdf'))} }
                  fullWidth={true}
                  buttonStyle={raisedButtonStyles}
                  labelColor={'#fff'}
                  labelStyle={{buttonLabelStyles,...{fontSize:'14px',padding:0}}}
                />
                </div>
              </div>
            </div>
            <div style={buttonRowSpacing} className="clearfix rowWrapper">
              <div style={{...buttonItemWrapper,...smallImageLeft}}>
              <RaisedButton 
                  icon={this.scutdogIcon()}
                  label="Scutdog" 
                  onClick={()=>{this.dbGoTo('/scutdogs')} }
                  fullWidth={true}
                  buttonStyle={raisedButtonStyles}
                  labelColor={'#fff'}
                  labelStyle={{buttonLabelStyles,...{fontSize:'14px',padding:0}}}
                />
              </div>
              <div style={{...buttonItemWrapper,...smallImageRight}}>
                <div style={{cursor:'pointer'}}>
                <RaisedButton 
                  icon={this.relayhealthIcon()}
                  label="Relay Health" 
                  onClick={()=>{this.dbGoTo('https://app.mil.relayhealth.com/',true)} }
                  fullWidth={true}
                  buttonStyle={raisedButtonStyles}
                  labelColor={'#fff'}
                  labelStyle={{buttonLabelStyles,...{fontSize:'14px',padding:0}}}
                />
                </div>
              </div>
            </div>
          </div>
          <BottomNavigationComp screen={this.state.screen}/>
        <div style={{...versionStyle,...{position:'absolute' as 'absolute'}}}>version 1.0.4</div>
      </div>
    )
  }
}
export default withRouter(DashboardPage);