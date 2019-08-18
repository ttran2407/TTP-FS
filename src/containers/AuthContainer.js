import React, { Component } from 'react';
import {connect} from 'react-redux'
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'
import { Checkbox} from 'semantic-ui-react'


class AuthContainer extends Component {

    state = {
        login: false
    }

    handleChange = (e) => {       
        this.setState(
            prevState => ({ login: !prevState.login })
        )
    }
    
    render() { 
        return ( 
            <div>
                <div>
                    Sign In 
                    <Checkbox toggle checked={this.state.login} onChange={this.handleChange}/>
                    Sign Up
                </div>

                <div>
                {this.state.login ?  <SignUp/> : <LogIn/>}
                </div>
           
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