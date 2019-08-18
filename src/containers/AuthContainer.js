import React, { Component } from 'react';
import {connect} from 'react-redux'
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'

class AuthContainer extends Component {

    state = {
        login: true
    }
    
    render() { 
        return ( 
            <div>
                {this.state.login ? <LogIn/> : <SignUp/>}
                {/* button to swith Sign Up and LogIn */}
            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
  }
 
export default connect(mapStateToProps, null)(AuthContainer);