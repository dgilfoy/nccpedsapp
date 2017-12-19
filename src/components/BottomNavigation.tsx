/**
 * @file BottomNavigation.tsx
 * 
 
 * Name: BottomNavigation.tsx
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
import { withRouter } from 'react-router-dom';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import {MapsLocalPhone} from 'material-ui/svg-icons';
import {ActionToday} from 'material-ui/svg-icons';
import SvgIcon from 'material-ui/SvgIcon';

export interface Props {
  title : string;
  rightIcon : any;
  screen : any;
  history: any;
  pageIndex : number;
}

export interface State {
  hasRighIcon : boolean,
  selectedIndex : number
}
const favoritesIcon = <ActionToday />;

const HomeIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);

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
  conditionalColor(expectedIndex){
    if(!this.props.hasOwnProperty('pageIndex')){
      return (expectedIndex == 0) ? 'rgba(161, 15, 30, 0.75)' : 'rgba(0, 0, 0, 0.54)';
    }
    return (expectedIndex == this.props.pageIndex) ? 'rgba(161, 15, 30, 0.75)' : 'rgba(0, 0, 0, 0.54)';
  }
  componentWillMount(){
    let currpage = ( this.props.hasOwnProperty('pageIndex')) ? this.props.pageIndex : 0;
    this.setState( { selectedIndex : currpage });
  }
  bottomStylesCalc(){
    return {
      height : '75px'
    }
  }
  render(){
    return (
      <div style={{float:'left',position:'absolute',bottom:'0px', zIndex:9999}}>
        <Paper zDepth={5} style={this.bottomStylesCalc()}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Home"
            style={{padding:'5px'}}
            icon={<HomeIcon  color={this.conditionalColor(0)}/>}
            onClick={() => this.select(0, {external:false,href:'/'})}
          />
          <BottomNavigationItem
            label="Directory"
            icon={<MapsLocalPhone color={this.conditionalColor(1)}/>}
            onClick={() => this.select(1, {external:false,href:'/directory'})}
          />
          <BottomNavigationItem
            label="Calendar"
            icon={favoritesIcon}
            onClick={() => this.select(false, {external:true,href:'https://calendar.google.com/calendar/embed?src=fuvtodunsk7fvni5rkpsp9cbmk@group.calendar.google.com'})}
          />
        </BottomNavigation>
      </Paper>
      </div>
    );
  }
}

export default withRouter(BottomNavigationComp);