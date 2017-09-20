/**
 * @file BottomNavigation.tsx
 * 
 
 * Name: BottomNavigation.tsx
 * 
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
import { withRouter } from 'react-router-dom';
import {NavigationChevronLeft} from 'material-ui/svg-icons';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import {ActionBookmark} from 'material-ui/svg-icons';
import {MapsLocalPhone} from 'material-ui/svg-icons';
import {NotificationEventNote} from 'material-ui/svg-icons';

export interface Props {
  title : string;
  rightIcon : any;
  screen : any;
  history: any;
}

export interface State {
  hasRighIcon : boolean,
  selectedIndex : number
}
const recentsIcon = <MapsLocalPhone />;
const favoritesIcon = <NotificationEventNote/>;
const nearbyIcon = <ActionBookmark />;

class BottomNavigationComp extends React.Component<Props, State>{

  select = (index, linkData ) => { 
    if(index){
      this.setState({selectedIndex: index});
    }
    if( linkData.external === false ){
      this.props.history.push(linkData.href);
    }else{
      window.open( linkData.href, '_system' );
    }
  };

  componentWillMount(){
    this.setState( { selectedIndex : 0 });
  }
  /**
   * 
   * 
   * @param {any} history 
   * @memberof AppTitleBar
   */
  goBack(history){
    history.goBack();
  }
  /**
   * 
   * 
   * @param {any} title 
   * @returns 
   * @memberof AppTitleBar
   */
  setTitle(title){
    return (
      <span>
        <span style={{paddingBottom:5}}>{...title}</span>
      </span>
    );
  }
  /**
   * 
   * 
   * @returns 
   * @memberof AppTitleBar
   */
  backIcon(){
    const leftNavChevSVG = {
      color : '#fff',
      marginTop : 10,
      float : 'left',
      height : "35px", 
      width : "15px",
      cursor : "pointer"
    }
    return (
      <NavigationChevronLeft 
        viewBox="5 0 15 32" 
        style={leftNavChevSVG} 
        onClick={()=>this.goBack(this.props['history'])}/>
    );
  }
  bottomStylesCalc(){
    return {
      marginTop: '10px',
      height : '75px'
    }
  }
  render(){
    return (
      <div>
        <Paper zDepth={5} style={this.bottomStylesCalc()}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Phone Directory"
            icon={recentsIcon}
            onClick={() => this.select(0, {external:false,href:'/directory'})}
          />
          <BottomNavigationItem
            label="Academic Calendar"
            icon={favoritesIcon}
            onClick={() => this.select(false, {external:true,href:'https://calendar.google.com/calendar/embed?src=fuvtodunsk7fvni5rkpsp9cbmk@group.calendar.google.com'})}
          />
          <BottomNavigationItem
            label="RelayHealth"
            icon={nearbyIcon}
            onClick={() => this.select(2, {external:true,href:'http://www.relayhealth.com/'})}
          />
        </BottomNavigation>
      </Paper>
      </div>
    );
  }
}

export default withRouter(BottomNavigationComp);