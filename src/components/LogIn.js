import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {getUser } from '../actions/stockAction'
 

class LogIn extends Component {

    state = {
        email: "",
        password: "",
        showError: false
      }

      handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
      handleSubmit = () => {
        this.createAuth(this.state)
      }


      createAuth = (userInfo) => {
        fetch('http://localhost:3000/login', {
          method: "POST",
          headers: {
            "Content_Type": 'application/json',
            Accepts: "application/json"
          },
          body: JSON.stringify({
            user: {
              email: userInfo.email,
              password: userInfo.password,
            }
          })
        })
        .then(res => res.json())
        .then(user => {
          if (user.error !== undefined){
            this.setState({showError: true})
          } else {
            localStorage.setItem("token", user.jwt);
            this.props.getUser(user.user);
          }  
        })
      }
    
    render() { 
        const {email, password} = this.state

        return(
        <Form error={this.state.showError} onSubmit={this.handleSubmit}>
            <Form.Field>
            <label>Email</label>
            <input name='email' value={email} onChange={this.handleChange} placeholder='Email' />
            </Form.Field>
            <Form.Field>
            <label>Password</label>
            <input type='password'  name='password' value={password} onChange={this.handleChange} placeholder='PassWord' />
            </Form.Field>
            <Message
            error
            header='Failed to Log In'
            content='Invalid Email or Password. Please try again.'
            />

            <Button type='submit'>Submit</Button>
        </Form>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}
 
export default connect(mapStateToProps, {getUser})(LogIn);