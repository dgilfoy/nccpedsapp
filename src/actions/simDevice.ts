/**
 * @file news.ts
 * File in charge of setting up the actions necessary for pulling in the news feed
 
 * Name: news.ts
 * Purpose of this file is to provide various functionality for retrieving the data for the news feed
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
import {simHasReadPermission,simRequestReadPermission} from './_helper';

export const REQUEST_DISPLAY_PHONE = 'REQUEST_DISPLAY_PHONE'
function requestSim() {
  return {
    type: REQUEST_DISPLAY_PHONE
  }
}

export const RECEIVE_DISPLAY_PHONE = 'RECEIVE_DISPLAY_PHONE'
function receiveDisplayPhone(displayPhone) {
  return {
    type: RECEIVE_DISPLAY_PHONE,
    phone: displayPhone,
    receivedAt: Date.now()
  }
}
// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchPosts('reactjs'))
export default function fetchDisplayPhone() {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.
  
  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(requestSim())
    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.
    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
    var plugins = window['plugins'];

    simRequestReadPermission(plugins.sim,
      (e)=>{
        console.log('requested permission, granted', e);
        return plugins.sim.getSimInfo((data)=>{
          let phone = String(data.phoneNumber).replace('+','');
          return dispatch(receiveDisplayPhone(phone));
        });
      },
      (info)=>{
        console.log(info,'permission not granted for some reason.');
        return "Error";
      }
    );
    simHasReadPermission(plugins.sim,
      (e)=>{  
        // cordova has permission to read from simcard
        // get simInfo
        return plugins.sim.getSimInfo((data)=>{
          let phone = String(data.phoneNumber).replace('+','');
          return dispatch(receiveDisplayPhone(phone));
        });
      },
      (info)=>{
        console.log(info,'cordova does not have permission to read sim card');
      }
    );
  }
}