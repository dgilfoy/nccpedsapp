/**
 * @file DashboardPage.tsx
 * File in charge of Displaying the home page or "Dashboard"
 
 * Name: DashboardPage.ts
 * Purpose of this file is to provide the view for the main page of the app -  or it's dashboard
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
import {Link} from 'react-router-dom';
import AppLogoBar  from '../components/AppLogoBar';
import {AppPageInterface} from '../components/AppTheme';
import {
  buttonRowSpacing,
  buttonsWrapper,
  versionStyle,
  smallImageLeft
} from '../styles/dashboardStyles';
import ExternalLink from '../components/ExternalLink';
import {getPDF} from '../actions/_helper';

const logoLarge = require('../res/images/logoLarge.png');

export interface Props {
  appPage: AppPageInterface;
}
export interface State {}

export default class DashboardPage extends React.Component<Props, State>{
  componentWillMount(){
    
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
        padding: '20px',
        border : '1px solid',
        backgroundColor: '#fff',
        textAlign : 'center',
        marginRight: '10%',
        marginTop : '20px', 
        width : '100px'
      },
    containerWidth = ( screenWidth > 800) ? 640 : screenWidth*.8;
    if( containerWidth < 420 ){
      let fullWidth = .8 * containerWidth;
      style.width = fullWidth + 'px';
    }else{
      let notFullWidth = .3 * containerWidth;
      style.width = notFullWidth + 'px';
    }
    return style;
  }
  render(){
    //@todo move all of my styles to a folder and do imports and/or use combines
    const buttonWrapperMinHeight = {
      minHeight: this.setMaxHeight()
    }
    const buttonItemWrapper = this.buttonWrapperStyle();
    return (
      <div style={{position:'relative', background: 'url(' + logoLarge + ') center no-repeat'}}>
       <AppLogoBar hasPaddingTop={false}/>
        <div style={{...buttonsWrapper,...buttonWrapperMinHeight}}>
          <div style={buttonRowSpacing} className="clearfix rowWrapper">
            <div style={{...buttonItemWrapper,...smallImageLeft}}>
              <ExternalLink 
                absolutePath="https://calendar.google.com/calendar/embed?src=fuvtodunsk7fvni5rkpsp9cbmk@group.calendar.google.com" 
                target="_system">
                Acad Calendar
              </ExternalLink>
            </div>
            <div style={{...buttonItemWrapper,...smallImageLeft}}>
              <ExternalLink 
                absolutePath="http://www.relayhealth.com/RelayHealth" 
                target="_system">Relay Health
              </ExternalLink>
            </div>
          </div>
          <div style={buttonRowSpacing} className="clearfix rowWrapper">
            <div style={{...buttonItemWrapper,...smallImageLeft}}>
              <Link to="/resources">CPG/Algorithms</Link>
            </div>
            <div style={{...buttonItemWrapper,...smallImageLeft}}>
              <div style={{cursor:'pointer'}} onTouchTap={()=>getPDF(require('../res/files/WR-Emerg-Code-Badge.pdf'))}>Badge Extras</div>
            </div>
          </div>
          <div style={buttonRowSpacing} className="clearfix rowWrapper">
            <div style={{...buttonItemWrapper,...smallImageLeft}}>
              <ExternalLink
                absolutePath="tel:+3016767337">Admin Phone
              </ExternalLink>
            </div>
            <div style={{...buttonItemWrapper,...smallImageLeft}}>
              <Link to="/directory">Phone Directory</Link>
            </div>
          </div>
          <div style={buttonRowSpacing} className="clearfix rowWrapper">
            <div style={{...buttonItemWrapper,...smallImageLeft}}>
              <Link to="/oncall">On Call</Link>
            </div>
          </div>
        </div>
        <div style={versionStyle}>0.0.1</div>
      </div>
    )
  }
}