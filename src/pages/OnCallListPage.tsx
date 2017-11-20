/**
 * @file OnCallListPage.tsx
 * File in charge of Displaying the on call list
 
 * Name: OnCallListPage.ts
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
//import {Link} from 'react-router-dom';
import AppTitleBar  from '../components/AppTitleBar';
import { withRouter } from 'react-router-dom';
import {AppPageInterface} from '../components/AppTheme';
import RaisedButton from 'material-ui/RaisedButton';
import BottomNavigationComp from '../components/BottomNavigation';
//import ExternalLink from '../components/ExternalLink';

const logo = require('../res/images/mpoc.png');

export interface Props {
  appPage: AppPageInterface;
  history: any;
}
export interface State {
  screen : any;
}

class OnCallListPage extends React.Component<Props, State>{
  componentWillMount(){  
    this.setState({
      screen : this.props.appPage.screen
    });
  }
  render(){
    //@todo move all of my styles to a folder and do imports and/or use combines
    const tButtonStyles ={
      width : '100%',
      padding : '5px'
    }
    return (
      <div>
        <div style={{position:'relative', height:this.props.appPage.screen.height-75, overflow:'scroll'}}>
        <AppTitleBar title="On Call Providers"/>
          <div style={{padding:'10px'}}>
            <div style={{width:'20%',float:'left'}}><img style={{width:'90%'}} src={logo} /></div>
            <div style={{width:'73%', float:'left', backgroundColor:'#003399', color:'#fff', padding:'10px', marginBottom:'10px'}}>
              <h4 style={{margin:'0 auto'}}>Military Pediatrics One Call Providers</h4>
              <p style={{margin:'3px auto',fontSize:13}}>
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
              href="tel:18662954913" 
              buttonStyle={{backgroundColor:'#ff3333'}}
            />  
          </div>
          <div className="clearfix">
            <div style={{width:'45%', float: 'left', marginLeft:'10%'}}>
              <RaisedButton 
                label='NICU On Call'
                labelColor='#fff'
                href="tel:18662954913" 
                buttonStyle={{backgroundColor:'#003399', float:'right'}}
              />  
            </div>
            <div style={{width:'45%', float: 'left'}}>
              <RaisedButton 
                label='PICU On Call'
                labelColor='#fff'
                href="tel:301-642-7667"
                buttonStyle={{backgroundColor:'#003399', float:'left'}}
              />  
            </div>
          </div>
          <div>
            <table style={{width:'90%', margin:'10px auto'}}>
              <tbody>
                <tr>
                  <td>
                    <RaisedButton 
                      style={tButtonStyles}
                      label='Adol'
                      href="tel:301-318-6999" 
                    />
                  </td>
                  <td>
                    <RaisedButton
                      style={tButtonStyles} 
                      label='Allergy'
                      href="tel:18662954913" 
                    />
                  </td>
                  <td>
                    <RaisedButton
                      style={tButtonStyles} 
                      label='Cards'
                      href="tel:301-385-9330" 
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <RaisedButton
                      style={tButtonStyles} 
                      label='Devo'
                      href="tel:301-646-8276" 
                    />
                  </td>
                  <td>
                    <RaisedButton
                      style={tButtonStyles} 
                      label='Endo'
                      href="tel:202-713-3321" 
                    />
                  </td>
                  <td>
                    <RaisedButton
                      style={tButtonStyles} 
                      label='ENT'
                      href="tel:18662954913" 
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <RaisedButton
                      style={tButtonStyles} 
                      label='Genetics'
                      href="tel:301-646-9017" 
                    />
                  </td>
                  <td>
                    <RaisedButton
                      style={tButtonStyles} 
                      label='GI'
                      href="tel:301-646-8201" 
                    />
                  </td>
                  <td>
                    <RaisedButton
                      style={tButtonStyles} 
                      label='Heme/Onc'
                      href="tel:301-412-4549" 
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <RaisedButton
                      style={tButtonStyles} 
                      label='ID'
                      href="tel:301-648-0545" 
                    />
                  </td>
                  <td>
                    <RaisedButton
                      style={tButtonStyles} 
                      label='Nephro'
                      href="tel:6154363962" 
                    />
                  </td>
                  <td>
                    <RaisedButton
                      style={tButtonStyles} 
                      label='Neuro'
                      href="tel:301-412-7840" 
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <RaisedButton
                      style={tButtonStyles} 
                      label='Ophtho'
                      href="tel:18662954913" 
                    />
                  </td>
                  <td>
                    <RaisedButton
                      style={tButtonStyles} 
                      label='Ortho'
                      href="tel:18662954913" 
                    />
                  </td>
                  <td>
                    <RaisedButton
                      style={tButtonStyles} 
                      label='Pulm'
                      href="tel:301-648-0144" 
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <RaisedButton
                      style={tButtonStyles} 
                      label='Rheum'
                      href="tel:301-648-0641" 
                    />
                  </td>
                  <td>
                    <RaisedButton
                      style={tButtonStyles} 
                      label='Surgery'
                      href="tel:18662954913" 
                    />
                  </td>
                  <td>
                    <RaisedButton
                      style={tButtonStyles} 
                      label='Urology'
                      href="tel:18662954913" 
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{width: '45%', margin:'0 auto'}}>
            <RaisedButton
              label='More Information'
                labelColor='#fff' 
                labelStyle = {{textAlign:'center'}}
                buttonStyle={{backgroundColor:'#003399'}}
                onClick={()=>{ this.props.history.push('/more-info') }}
            />
          </div>
        </div>
        <BottomNavigationComp screen={this.state.screen}/>
      </div>
    )
  }
}
export default withRouter(OnCallListPage);