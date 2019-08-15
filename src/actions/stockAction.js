/* ---------- ACTION CREATORS ------------- */
const getWatchlist = (watchlist) => ({type: "GET_WATCH_LIST", payload: watchlist})
const getHolding = (holding) => ({type: "GET_HOLDING", payload: holding})

/* ---------- THUNK CREATORS ------------- */


const fetchWatchlist = (user_id) => {
    // let token = localStorage.getItem("token")
    return dispatch => {
      return fetch(`http://localhost:3000/users/${user_id}/watchlists`,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Action": "application/json",
        //   "Authorization": `${token}`
        }
      })
      .then(res => res.json())
      .then(watchlist => {
         dispatch(getWatchlist(watchlist))
            // watchlist.forEach(stock => updateWatchlistChange(stock.stock_symbol, dispatch))
          })
    }
  }

  const fetchHolding = (user_id) => {
    // let token = localStorage.getItem("token")
    return dispatch => {
      return fetch(`http://localhost:3000/users/${user_id}/holdings`,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Action": "application/json",
        //   "Authorization": `${token}`
        }
      })
      .then(res => res.json())
      .then(holding => {
         dispatch(getHolding(holding))
            // watchlist.forEach(stock => updateWatchlistChange(stock.stock_symbol, dispatch))
          })
    }
  }
  export {fetchWatchlist, fetchHolding}