/**
 * @file _helper.ts
 * 
 
 * Name: _helper.ts
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
export const getMax = function(array){
  return Math.max.apply(null,array);
}
export const nextId = (array) => {
  let nextId = array.length ? getMax(array) + 1 : 1;
  return nextId;
}

/**
*  getPDF : void - opens a pdf - in the inAppBrowser for iOS, using FileOpener2 for external applications in android, and in another tab for the web.
* 
* @param {any} file 
* @memberof ResourcesItem
*/
export const getPDF = function(file){
 if (__IS_CORDOVA_BUILD__) {
   /* eslint-disable */
   if (cordova.platformId === 'android') {
     var filetransfer = new FileTransfer();
     filetransfer.download(
       cordova.file.applicationDirectory + `www/${file}`,
       cordova.file.externalApplicationStorageDirectory + file,
       success => {
         cordova.plugins.fileOpener2.open(success.toURL(), 'application/pdf');
       },
       error => {
         console.log('error',error)
       }
     );
   } else {
     (window as any).cordova.InAppBrowser.open(file, '_blank', 'location=no');
   }
   /* eslint-disable */
 } else {
   (window as any).open(encodeURI(file), '_system');
 }
}

// Android only: check permission
export const simHasReadPermission = function(sim,successCallback,errorCallback) {
  sim.hasReadPermission(successCallback, errorCallback);
}

// Android only: request permission
export const simRequestReadPermission = function(sim,successCallback,errorCallback) {
  sim.requestReadPermission(successCallback, errorCallback);
}