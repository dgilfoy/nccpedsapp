/**
 * @file SplashPage.tsx
 * 
 
 * Name: SplashPage.tsx
 * View for the eventual login page if/when authentication will be added
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
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card,CardActions, CardHeader, CardText} from 'material-ui/Card';

export interface Props {
  submitPass : any
}

export interface State {
  inputValue : any  
}

export default class SplashPage extends React.Component<Props, State>{
  
  componentWillMount(){
    this.setState({inputValue:''});
  }
  submitPass(){
    // set the datastore "is authenticated" to be true
    
  }
  updateInputValue(e){
    e.persist();
    this.setState(prevState => ({
      inputValue : e.target.value
    }));
  }
  render(){
    return (
      <div>
        <Card>
            <CardHeader
              title="Log In"
            />
            <CardText>
              <TextField
                id="passPhrase"
                hintText="Enter the passphrase to continue"
                errorText="This field is required."
                value={this.state.inputValue}
                onChange={this.updateInputValue.bind(this)}
              />
            </CardText>
            <CardActions>
              <RaisedButton label="Submit" onClick={this.props.submitPass} />
            </CardActions>
          </Card>
      </div>
    )
  }
}