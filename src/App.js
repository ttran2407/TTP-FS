import React, {Component} from 'react';
import './App.css';

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
    let list = this.state.watchlists.map( stock => <li key = {stock.id}>{stock.ticker} </li>)

    return (
      <div >
        <ul>
        {list}
        </ul>  
      </div>
    );
  }
}

export default App;
