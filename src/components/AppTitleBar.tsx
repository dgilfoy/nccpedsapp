/**
 * @file AppTitleBar.tsx
 * 
 
 * Name: AppTitleBar.tsx
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
import AppBar from 'material-ui/AppBar';
import {NavigationChevronLeft} from 'material-ui/svg-icons';

export interface Props {
  title : string;
  rightIcon : any;
}

export interface State {
  hasRighIcon : boolean
}

class AppTitleBar extends React.Component<Props, State>{
  componentWillMount(){
    this.setState( { hasRighIcon : (this.props.rightIcon === undefined ) ? false : true });
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
  rightIcon(searchNode){
    return(
      <div id="AppTitleBarRightIcon">{ this.state.hasRighIcon ? searchNode : '' }</div>
    )
  }
  render(){
    const {title,rightIcon} = this.props;
    return (
      <div>
        <AppBar
          style={{backgroundColor:'#A10F1E', fontFamily:'san-serif'}}
          title={this.setTitle(title)}
          iconElementLeft={this.backIcon()}
          onTitleTouchTap={()=>this.goBack(this.props['history'])}
          iconElementRight={this.rightIcon(rightIcon)}
        />
      </div>
    );
  }
}

export default withRouter(AppTitleBar);