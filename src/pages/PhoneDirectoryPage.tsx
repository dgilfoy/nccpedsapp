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
import phoneNumbers from '../res/data/phoneDirectory';
import RaisedButton from 'material-ui/RaisedButton';
import {ActionSearch} from 'material-ui/svg-icons';
import {ActionPermContactCalendar} from 'material-ui/svg-icons';
import TextField from 'material-ui/TextField';
import BottomNavigationComp from '../components/BottomNavigation';
import {Card, CardHeader} from 'material-ui/Card';

export interface Props {
  appPage: AppPageInterface;
}
export interface State {
  phoneDir,
  currentList,
  showSearchBar,
  screen
}

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
    var val = e.target['value'],
      results = this.state.phoneDir.filter(function(elem){
        return elem.title.toLowerCase().indexOf(val.toLowerCase()) >= 0;
      });
    this.setState(prevState => ({
      currentList : results
    }));
  }
  searchText(){
    return (
      <div style={{width:'20%', margin:'0 auto', minWidth:'300px'}}>
        <div style={{width:'10%',float:'left'}}>
          <ActionSearch viewBox="5 0 15 32" style={{width:'35px',height:'35px',marginTop:'10px'}}/>
        </div>
        <div style={{width:'85%',float:'left'}}>
          <TextField id="searchText" hintText="Search the Directory" onChange={this.liveSearch.bind(this)}/>
        </div>
      </div>
    )
  }
  getPhoneTitle(phone){
    return phone.title;
  }
  getPhoneSubTitle(phone){
    let subtitle = '';
    if(phone.Division.length > 0){
      subtitle = phone.Division;
      if( phone.position.length > 0){
        subtitle += ', ' + phone.position;
      }
    }else{
      if( phone.position.length > 0){
        subtitle += phone.position;
      }else{
        subtitle += phone['first-name'] + ' ' + phone['last-name'];
      }
    }
    return subtitle;
  }
  cardItem(phone,itemStyle){
    return(
      <div style={itemStyle} key={phone.id} onClick={(e) => {console.log(e)}}>
        <Card>
        <CardHeader
          title={this.getPhoneTitle(phone)}
          subtitle={this.getPhoneSubTitle(phone)}
          avatar={<ActionPermContactCalendar color='rgb(161, 15, 30)' style={{float:'left',marginTop:'5px',marginLeft:'10px'}}/>} 
        />
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
        <BottomNavigationComp screen={this.state.screen}/>
      </div>
    )
  }
}

export default withRouter(PhoneDirectoryPage);