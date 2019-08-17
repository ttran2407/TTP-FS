import React, {Component} from 'react';
import './App.css';
// import {connect} from 'react-redux'
import {Route,Switch, withRouter} from 'react-router-dom'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import UserContainer from './containers/UserContainer'


class App extends Component {

  state = {
    watchlists: []
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/users/1/watchlists",
      { method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Action": "application/json",
          // "Authorization": `${token}`
        }
      }
    )
    .then(res => {
      if (res.ok){
        return res.json()
      } else {
        throw new Error('Something went wrong'); //server error
      }
    })
    .then(watchlists => {
      this.setState({
        watchlists: watchlists
      })
    })
    .catch(error => console.log(error))
  }

  
  render() {
    // let list = this.state.watchlists.map( stock => <li key = {stock.id}>{stock.ticker} </li>)

    return (
      <div >
        <Switch>
          <Route path="/login" component={LogIn}></Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route exact path="/" component ={UserContainer}/> 
        </Switch> 
      </div>
    );
  }
}
export default withRouter(App);
