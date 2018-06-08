/**
 * @file PhoneDirectoryPage.tsx
 * File in charge of Displaying the Phone Directory
 
 * Name: PhoneDirectoryPage.ts
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
import AppTitleBar  from '../components/AppTitleBar';
import {AppPageInterface} from '../components/AppTheme';
import phoneNumbers from '../res/data/phoneDirectory2018';
import RaisedButton from 'material-ui/RaisedButton';
import {ActionSearch} from 'material-ui/svg-icons';
import {ActionPermContactCalendar} from 'material-ui/svg-icons';
import TextField from 'material-ui/TextField';
import BottomNavigationComp from '../components/BottomNavigation';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export interface Props {
  appPage: AppPageInterface;
}
export interface State {
  phoneDir,
  currentList,
  showSearchBar,
  screen
}

let blurTimeout;

class PhoneDirectoryPage extends React.Component<Props, State>{
  componentWillMount(){
    this.setState({
      phoneDir: phoneNumbers,
      currentList : phoneNumbers,
      showSearchBar : false,
      screen : this.props.appPage.screen
    });
  }
  searchIcon(){
    const searchIconStyles = {
      color : '#fff',
      marginTop : 10,
      float : 'right',
      height : "35px", 
      width : "25px",
      cursor : "pointer"
    }
    return (
      <ActionSearch 
        viewBox="5 0 15 32"
        style={searchIconStyles}
        onClick={(e)=>this.showSearchBox(e)}
      />
    )
  }
  showSearchBox(e){
    //let ele = document.getElementById('searchText');
    this.setState(prevState => ({
      showSearchBar : true
    }));
    //ele.focus();
  }
  hideSearchBox(e){
    this.setState(prevState => ({
      showSearchBar : false
    }));  
  }
  liveSearch(e){
    var matches = function(elem,input){
      return elem.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },
      val = e.target['value'];
    if( val.length > 1 ){
      var results = this.state.phoneDir.filter(function(elem,index){
        if ( matches( elem.LastName, val ) 
          || matches(elem.FirstName, val ) 
          || matches(elem.Division, val ) 
          || matches(elem.Service, val )
        ){
          return true;
        }else{
          return false;
        }
      });
        
      this.setState(prevState => ({
        currentList : results
      }));
        if(blurTimeout != null) {
            clearTimeout(blurTimeout);
            blurTimeout = null;
        }
        
        blurTimeout = setTimeout(() => {
            (this.refs["searchText"] as TextField).blur();
        }, 1000);
    }
  }
  searchText(){
    return (
      <div style={{width:'20%', margin:'0 auto', minWidth:'300px'}}>
        <Card>
        <CardHeader
          title={<TextField id="searchText" ref="searchText" hintText="Search the Directory" fullWidth={true} onChange={this.liveSearch.bind(this)}/>}
          avatar={<ActionSearch viewBox="5 0 15 32" style={{width:'35px',height:'35px',marginTop:'10px'}}/>} 
        />
        </Card>
      </div>
    )
  }
  getPhoneSubTitle(phone){
    return phone.Service;
  }
  getPhoneTitle(phone){
    let subtitle = '';
    if(phone.FirstName.length > 0 && phone.LastName.length > 0){
      subtitle += phone.FirstName + ' ' + phone.LastName;
    }else if(phone.LastName.length > 0) {
        subtitle += phone.LastName;
    }else{
      if(phone.Service.length > 0){
        subtitle = phone.Service;
        if( phone.Position.length > 0){
          subtitle += ', ' + phone.Position;
        }
      }else{
        if( phone.Position.length > 0){
          subtitle += phone.Position;
        }
      }
    }
    
    return subtitle;
  }
  openDialer(phoneNumber){
    return window.open('tel://'+phoneNumber,'_system');
  }
  openEmail(emailAddress){
    return window.open('mailto:'+ emailAddress,'_system');
  }
  getPhoneNumber(phone){
    if( typeof phone.WorkPhone == 'number' ){
      return phone.WorkPhone;
    }else if( typeof phone.WorkPhone == 'string'){
      // parse to Number and return.
      if( phone.WorkPhone.length < 10 ){
        if( typeof phone.CellPhone == 'number'){
          return phone.CellPhone;
        }else{
          if( typeof phone.CellPhone == 'string'){
            if( phone.CellPhone.length < 10 ){
              //console.log('item has no work or cell phone item listed', phone );
              return false;
            }else{
              return this.parsePhoneNumber(phone.CellPhone);
            }
          }
        }
      }
      return this.parsePhoneNumber(phone.WorkPhone)
    }
  }
  parsePhoneNumber(pnumber){
      return pnumber.replace(/-/gi,'');
  }
  parsePhoneDisplay(phoneNumber){
    let display = '',
      phoneNumStr = String(phoneNumber);
    if( phoneNumStr.length === 10 ){
      display += '(' + phoneNumStr.substr(0,3) + ') ' + phoneNumStr.substr(3,3) + '-' + phoneNumStr.substr(6,4);
    }else{
      display += '(' + phoneNumStr.substr(1,3) + ') ' + phoneNumStr.substr(4,3) + '-' + phoneNumStr.substr(7,4)
    }
    return display;
  }
  getEmail(phone){
    let workmail = String(phone.WorkEMail),
      mailLengthProp = workmail.hasOwnProperty('length');
    if( mailLengthProp && workmail.length > 1){
      return workmail;
    }else{
      // workmail is not set, check the Personel (Personal?) email;
      let persmail = String(phone.PersonalEMail);
      if(persmail.hasOwnProperty('length') && persmail.length > 0 ){
        return persmail;
      }else{
        return false;
      }
    }
  }
  renderEmailAction(eMail){
    if(eMail !== false){
      return (
        <div onClick={(e) => {this.openEmail(eMail)}}>
          <label>E-Mail:</label>
          <FlatButton label={eMail} labelStyle={{fontSize:'12px',textAlign:'left'}}/> 
        </div>
      )
    }
  }
  renderPhoneAction(phoneNumber){
    if( phoneNumber ){
      return(
        <div onClick={(e) => {this.openDialer(phoneNumber)}}>
          <label>Call:</label><br/>
          <FlatButton label={this.parsePhoneDisplay(phoneNumber)}/>
        </div>
      )
    }
  }
  contactInfoMessage(phone,email){
    if(phone && email) return '';
    if(!phone){
      if(!email){
        return 'There is no phone number or email address listed for this contact.';
      }else{
        return 'There is no phone number listed for this contact.';
      }
    }else if(!email){
      // add message that email address isn't listed for this contact.   
      // return 'There is no email address listed for this contact'; // commented out for too much info, can add back in if desired.
    }
  }
  cardItem(phone,itemStyle){
    var phoneNumber = this.getPhoneNumber(phone);
    var eMail = this.getEmail(phone);
    return(
      <div style={itemStyle} key={phone.id}>
        <Card>
        <CardHeader
          title={this.getPhoneTitle(phone)}
          subtitle={this.getPhoneSubTitle(phone)}
          actAsExpander={true}
          showExpandableButton={true}
          avatar={<ActionPermContactCalendar color='rgb(161, 15, 30)' style={{float:'left',marginTop:'5px',marginLeft:'10px'}}/>}
        />
        <CardText expandable={true}>
          <p style={{width:'60%',margin:'0 auto'}}>{this.contactInfoMessage(phoneNumber,eMail)}</p>
          <CardActions>
            {this.renderPhoneAction(phoneNumber)}
            {this.renderEmailAction(eMail)}
          </CardActions>
        </CardText>
        </Card>
      </div>
    )
  }
  raisedButtonItem(phone,itemStyle){
    return (
      <div style={itemStyle} key={phone.id}>
        <RaisedButton
          style={{padding:'5px'}}
          buttonStyle={{textAlign:'left'}}
          icon={<ActionPermContactCalendar color='rgb(161, 15, 30)' style={{float:'left',marginTop:'5px',marginLeft:'10px'}}/>} 
          labelStyle={{fontSize:'14px', color:'#808080',overflow:'visible'}}
          label={phone.title} href={'tel:' +phone.number} fullWidth={true}
        />
      </div>)
  }
  render(){
    var {currentList} = this.state;
    const itemStyle = {
      margin :    '20px auto',
      width :     '80%',
      minWidth :  '200px',
      maxWidth :  '600px',
      textAlign:  'left'
    }
    return (
      <div style={{overflow:'hidden',width:'100%',height:'100%'}}>
        <div style={{position:'relative', height:this.props.appPage.screen.height-76, overflow:'auto', width:'100%'}}>
          <AppTitleBar title="Phone Directory" rightIcon={this.searchIcon()}/>
          { this.state.showSearchBar ? this.searchText() : ''}
          <div id="phoneDirListWrapper" style={{minHeight:'400px'}}>
            {currentList.map(phone => {
                return this.cardItem(phone,itemStyle);
              }) 
            }
          </div>
        </div>
        <BottomNavigationComp screen={this.state.screen} pageIndex={1}/>
      </div>
    )
  }
}

export default withRouter(PhoneDirectoryPage);