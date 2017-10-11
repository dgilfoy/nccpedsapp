/**
 * @file ResourcesItem.tsx
 * 
 
 * Name: ResourcesItem.tsx
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
import {ResourcesInterface} from '../res/data/resources';
import {ListItem} from 'material-ui/List';
import ExternalLink from './ExternalLink';
import {getPDF} from '../actions/_helper';
import {HardwareKeyboardArrowRight} from 'material-ui/svg-icons';

export interface Props {
  resources: ResourcesInterface;
}

export interface State {

}
const listStyle = {
  margin: 10,
  border: '1px groove #FBF8F8',
  padding : "10px 5px"
}

class ResourcesItem extends React.Component<Props, State>{
  
  constructor(props){
    super(props);
  }
  /**
   *  inAppLinkClick - returns the pdf or pushes the history if the url contains pdf
   * 
   * @param {string} url 
   * @param {Props} props 
   * @memberof ResourcesItem
   */
  inAppLinkClick(url, props) : void {
      if(url.includes('pdf')){
        getPDF(url);  
      }else{
        props.history.push(url);
      }
  }
  /**
   * externalLink - is an external link, returns a link of that component.
   * 
   * @param {ResourcesInterface} resources 
   * @returns JSX.Element
   * @memberof ResourcesItem
   */
  externalLink(resources: ResourcesInterface) : JSX.Element {
    return (
      <ExternalLink target="_system" absolutePath={resources.link}>
        <ListItem primaryText={resources.title} style={listStyle}/>  
      </ExternalLink>
    )
  }
  /**
   * listItem  - returns a listItem (materialUI element)
   * 
   * @param {any} resources 
   * @returns JSX.Element
   * @memberof ResourcesItem
   */
  listItem(resources) : JSX.Element {
    //console.log(resources);
    return (
      <ListItem 
        rightIcon={<HardwareKeyboardArrowRight/>}
        primaryText={resources.title} style={listStyle} 
        onTouchTap={()=>this.inAppLinkClick(resources.link,this.props)}
      />  
    )
  }
  /**
   * Renders the Resource list item
   * 
   * @returns 
   * @memberof ResourcesItem
   */
  render(){
    const {resources} = this.props;
    const isExternal = resources.isExternal;
    return (
      <div>
        {isExternal ? this.externalLink(resources) : this.listItem(resources)}
      </div>
      
    );
  }
}

export default withRouter(ResourcesItem);