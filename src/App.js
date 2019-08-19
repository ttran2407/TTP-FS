import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import './Custom.sass'
import {withRouter} from 'react-router-dom'
import AuthContainer from './containers/AuthContainer'
import UserContainer from './containers/UserContainer'
import {getUser} from './actions/stockAction'



class App extends Component {

  componentDidMount = () => {
    let token = localStorage.getItem("token");
    fetch(`http://localhost:3000/current_user`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Action": "application/json",
        "Authorization": `${token}`
      }
    })
    .then(res => res.json())
    .then(object => {
       if (!object.message){
        this.props.getUser(object.user)
       } 
    })
  }
 
  render() {
    
    return (
      
      <div >
        {this.props.user ? <UserContainer user ={this.props.user} /> : <AuthContainer/>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      user: state.user
  }
}

export default withRouter(connect(mapStateToProps, {getUser})(App));

