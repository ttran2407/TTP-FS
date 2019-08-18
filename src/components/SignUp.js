import React from 'react'
import {Button, Form, Message } from 'semantic-ui-react'
import {connect } from 'react-redux'
import {getUser } from '../actions/stockAction'


class SignUpForm extends React.Component {

  state = {
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    error: false,
    nameError: false,
    emailError: false,
    passwordError: false,
    passwordConfirmationError: false,
    errorContent: 'Email is already taken. Please try another one'
  }

  resetError = () => {
    this.setState({
        error: false,
        nameError: false,
        emailError: false,
        passwordError: false,
        passwordConfirmationError: false,
        errorContent: 'Email is already taken. Please try another one'
    })
  }

  handleSubmit = (e) => {

    this.resetError()
    if (this.state.email.length < 8 || this.state.email.length > 20 || !this.state.email.includes("@") ){
      this.setState({userNameError: true, error: true, errorContent: "Please enter a valid email"})
    } else if (this.state.name === ""){
      this.setState({nameError: true, error: true, errorContent: " Name cannot be empty"})
    }  else if (this.state.password.length < 8){
      this.setState({passwordError: true, error: true, errorContent: "PassWord need to be at least 8 characters"})
    } else if (this.state.passwordConfirmation !== this.state.password){
      this.setState({passwordConfirmationError: true, error: true, errorContent: "PassWord need to be match"})
    }  else {
      this.createUser(this.state)
    }
  }

  createUser = (userInfo) => {
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content_Type": 'application/json',
        Accepts: "application/json"
      },
      body: JSON.stringify({
        user: {
          name: userInfo.name,
          email: userInfo.email,
          password: userInfo.password,
          password_confirmation: userInfo.passwordConfirmation
        }
      })
    })
    .then(res => res.json())
    .then(object => {
        console.log(object)
      if (object.error !== undefined){
        this.setState({error: true})
      } else {
        localStorage.setItem("token", object.jwt);
        this.props.getUser(object.user);
      }
    })
    .catch(error => console.error(error))
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){

    const {name, email, password, passwordConfirmation} = this.state
    return(
      <Form error={this.state.error} onSubmit={this.handleSubmit}>
        <Message
          error
          header='Failed to Sign Up'
          content={this.state.errorContent}
        />

        <Form.Field error={this.state.nameError} required>
          <label>Name</label>
          <input name='name' value={name} onChange={this.handleChange} placeholder='Name' />
        </Form.Field>

        <Form.Field error={this.state.emailError} required>
          <label>Email</label>
          <input name='email' value={email} onChange={this.handleChange} placeholder='Email' />
        </Form.Field>

        <Form.Field error={this.state.passwordError} required>
          <label>Password</label>
          <input  type='password'  name='password' value={password} onChange={this.handleChange} placeholder='PassWord' />
        </Form.Field>

        <Form.Field error={this.state.passwordConfirmationError} required>
          <label>Confirm Password</label>
          <input  type='password' name='passwordConfirmation' value={passwordConfirmation} onChange={this.handleChange} placeholder='Confirm PassWord' />
        </Form.Field >

        <Button type='submit'>Submit</Button>
      </Form>
    )
  }

}



export default connect (null, {getUser}) (SignUpForm)
