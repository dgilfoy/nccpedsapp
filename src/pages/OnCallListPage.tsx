/**
 * @file OnCallListPage.tsx
 * File in charge of Displaying the on call list
 
 * Name: OnCallListPage.ts
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

const logo = require('../res/images/mpoc.png');

export interface Props {
  appPage: AppPageInterface;
}
export interface State {}

export default class OnCallListPage extends React.Component<Props, State>{
  componentWillMount(){  
  }
  render(){
    //@todo move all of my styles to a folder and do imports and/or use combines
    
    return (
      <div style={{position:'relative'}}>
      <AppTitleBar title="One Call Directory"/>
        <div>
          <div><img src={logo} /></div>
          <div>
            <h1>Military Pediatrics OneCall</h1>
            <p>
              Comprehensive Inpatient &amp; Outpatient Pediatric Subspecialty Care &amp; Consultation 
              for TRICARE in the MidAtlantic Region &amp; WorldWide
            </p>
          </div>
        </div>
        <div style={{width:'90%',margin:'10px auto'}}>
          <RaisedButton 
            label='Call for Admission/Transport'
            labelColor='#fff' 
            fullWidth={true} 
            buttonStyle={{backgroundColor:'#ff3333'}}
          />  
        </div>
        <div className="clearFix">
          <div>
            <RaisedButton 
              label='NICU On Call'
              labelColor='#fff' 
              buttonStyle={{backgroundColor:'#003399'}}
            />  
          </div>
          <div>
            <RaisedButton 
              label='PICU On Call'
              labelColor='#fff' 
              buttonStyle={{backgroundColor:'#003399'}}
            />  
          </div>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <td>Adol</td>
                <td>Allergy</td>
                <td>Cards</td>
              </tr>
              <tr>
                <td>Devo</td>
                <td>Endo</td>
                <td>ENT</td>
              </tr>
              <tr>
                <td>Genetics</td>
                <td>GI</td>
                <td>Heme/Onc</td>
              </tr>
              <tr>
                <td>ID</td>
                <td>Nephro</td>
                <td>Neuro</td>
              </tr>
              <tr>
                <td>Ophtho</td>
                <td>Ortho</td>
                <td>Pulm</td>
              </tr>
              <tr>
                <td>Rheum</td>
                <td>Surgery</td>
                <td>Urology</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h4>More Information</h4>
        </div>
      </div>
    )
  }
}