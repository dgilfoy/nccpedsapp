/**
 * @file PhoneDirectoryPage.tsx
 * File in charge of Displaying the Phone Directory
 
 * Name: PhoneDirectoryPage.ts
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
import phoneNumbers from '../res/data/phoneDirectory';
import RaisedButton from 'material-ui/RaisedButton';
//import FlatButton from 'material-ui/FlatButton';
import {ActionSearch} from 'material-ui/svg-icons';
import {MapsLocalPhone} from 'material-ui/svg-icons';
//import Dialog from 'material-ui/Dialog';
//import {Card, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

//import ExternalLink from '../components/ExternalLink';

export interface Props {
  appPage: AppPageInterface;
}
export interface State {
  phoneDir,
  currentList,
  showSearchBar
}

export default class PhoneDirectoryPage extends React.Component<Props, State>{
  componentWillMount(){
    this.setState({
      phoneDir: phoneNumbers,
      currentList : phoneNumbers,
      showSearchBar : false
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
    this.setState(prevState => ({
      showSearchBar : true
    }));
  }
  hideSearchBox(e){
    this.setState(prevState => ({
      showSearchBar : false
    }));  
  }
  
  liveSearch(e){
    let val = e.target['value'],
      results = this.state.phoneDir.filter(function(elem){
      return elem.title.toLowerCase().indexOf(val) > -1;
    });
    this.setState(prevState => ({
      currentList : results
    }));
  }
  searchText(){
    return (
      <div style={{width:'20%', margin:'0 auto', minWidth:'300px'}}>
        <ActionSearch 
          viewBox="5 0 15 32"
        />
        <TextField id="searchText" hintText="Search the Directory" onChange={this.liveSearch.bind(this)}/>
      </div>
    )
  }
  render(){
    var {currentList} = this.state;
    const itemStyle = {
      margin: '20px auto',
      width : '20%',
      minWidth : '200px'
    }
    return (
      <div style={{position:'relative'}}>
        <AppTitleBar title="Phone Directory" rightIcon={this.searchIcon()}/>
        { this.state.showSearchBar ? this.searchText() : ''}
        
        <div id="phoneDirListWrapper">
          {currentList.map(phone => {
              return (<div style={itemStyle} key={phone.id}>
                <RaisedButton labelPosition="before" icon={<MapsLocalPhone style={{float:'right',marginTop:'5px'}}/>} label={phone.title} href={'tel:' +phone.number} fullWidth={true}/>
              </div>)
            }) 
          }
        </div>
      </div>
    )
  }
}