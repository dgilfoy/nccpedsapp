/**
 * @file BadgeExtrasPage.tsx
 * File in charge of Displaying the badge extras
 
 * Name: BadgeExtrasPage.ts
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
//import {Link} from 'react-router-dom';
import AppTitleBar  from '../components/AppTitleBar';
import {AppPageInterface} from '../components/AppTheme';
import RaisedButton from 'material-ui/RaisedButton';

//import ExternalLink from '../components/ExternalLink';

export interface Props {
  appPage: AppPageInterface;
}
export interface State {}

export default class BadgeExtrasPage extends React.Component<Props, State>{
  componentWillMount(){
    
  }
  render(){
    //@todo move all of my styles to a folder and do imports and/or use combines
    
    return (
      <div style={{position:'relative', height:this.props.appPage.screen.height-86}}>
      <AppTitleBar title="More Information"/>
       <div style={{padding:'10px'}}>
          <h2>How to use the One Call Page</h2>
          <p>The One Call page will dial the on-call physician directly for each service. Pediatric Surgery, urology, and  allergy dial the pager access number and pin; 
            you will need to enter your callback number when prompted.</p>
          <h3>Operator Assited Paging</h3>
          <p>You may also access the live operator to page any military pediatric service by calling (or pressing) the number below:</p>
          <RaisedButton label="1-866-666-2362" href="tel:1-866-666-2362"/>
        </div>
      </div>
    )
  }
}