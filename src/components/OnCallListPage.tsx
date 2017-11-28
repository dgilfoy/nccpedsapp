/**
 * @file ResourcesList.tsx
 * 
 
 * Name: ResourcesList.tsx
 * 
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
import AppTitleBar  from '../components/AppTitleBar';
import RaisedButton from 'material-ui/RaisedButton';
import {AppPageInterface} from '../components/AppTheme';

const logo = require('../res/images/mpoc.png');

export interface Props {
  devicePhone : any;
  appPage: AppPageInterface;
  history: any;
}

export interface State {}

export default class ResourcessList extends React.Component<Props, State>{
  constructor(props){
    super(props);

  }
  testCallbackPhone(callback){
    this.openDialer('18662954913,,,1654454#,,,' + callback + '#');  
  }
  openDialer(phoneNumber){
    return window.open('tel://'+phoneNumber,'_system');
  }
  render(){
    const {devicePhone} = this.props;
    const tButtonStyles ={
      width : '100%',
      padding : '5px'
    }
    return (
      <div style={{backgroundColor:"#fff"}}>
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
          <div onClick={(e) => {this.testCallbackPhone(devicePhone)}}>
            TEST Call
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
                href="tel:3016427667"
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
                      href="tel:3013186999" 
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
                      href="tel:3013859330" 
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <RaisedButton
                      style={tButtonStyles} 
                      label='Devo'
                      href="tel:3016468276" 
                    />
                  </td>
                  <td>
                    <RaisedButton
                      style={tButtonStyles} 
                      label='Endo'
                      href="tel:2027133321" 
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
                      href="tel:3016469017" 
                    />
                  </td>
                  <td>
                    <RaisedButton
                      style={tButtonStyles} 
                      label='GI'
                      href="tel:3016468201" 
                    />
                  </td>
                  <td>
                    <RaisedButton
                      style={tButtonStyles} 
                      label='Heme/Onc'
                      href="tel:3014124549" 
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <RaisedButton
                      style={tButtonStyles} 
                      label='ID'
                      href="tel:3016480545" 
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
                      href="tel:3014127840" 
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <RaisedButton
                      style={tButtonStyles} 
                      label='Ophtho'
                      href="tel:18662954913,,,2022721" 
                    />
                  </td>
                  <td>
                    <RaisedButton
                      style={tButtonStyles} 
                      label='Ortho'
                      href="tel:18662954913,,,1010530" 
                    />
                  </td>
                  <td>
                    <RaisedButton
                      style={tButtonStyles} 
                      label='Pulm'
                      href="tel:3016480144" 
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <RaisedButton
                      style={tButtonStyles} 
                      label='Rheum'
                      href="tel:3016480641" 
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
      </div>
    );
  }
}