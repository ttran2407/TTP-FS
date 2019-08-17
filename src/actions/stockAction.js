/* ---------- ACTION CREATORS ------------- */
const getWatchlist = (watchlist) => ({type: "GET_WATCH_LIST", payload: watchlist})
const getHolding = (holding) => ({type: "GET_HOLDING", payload: holding})
const getSingleStock = (stock) => ({type: "GET_SINGLE_STOCK", payload: stock})
const triggleTickerError = () => ({type: "TRIGGLE_TICKER_ERROR"})
const cancelTickerError = () => ({type: "CANCEL_TICKER_ERROR"})
const updateWatchlist = (stock) => ({type: "UPDATE_WATCHLIST", payload: stock})
const updateHolding = (stock) => ({type: "UPDATE_HOLDING", payload: stock})



/* ---------- THUNK CREATORS ------------- */

const apiKey = process.env.REACT_APP_API_KEY

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


  const fetchSingleStock = (ticker) => {
    return dispatch => { 
      return fetch(`https://cloud.iexapis.com/stable/stock/${ticker}/quote/?token=${apiKey}`)
      .then(res => {
        if (res.ok){
          return res.json()
        } else {
          dispatch(triggleTickerError())
        }
      })
      .then(stock => {
        if (stock){
          dispatch(getSingleStock(stock))
          dispatch(cancelTickerError())
        }        
      })
      .catch(error => console.log(error)) 
    }
  }

  const updateWatchlistStock = (ticker) => {
    return dispatch => { 
      return fetch(`https://cloud.iexapis.com/stable/stock/${ticker}/quote/?token=${apiKey}`)
      .then(res => {
        if (res.ok){
          return res.json()
        } else {
          throw Error
        }
      })
      .then(stock => {
          dispatch(updateWatchlist(stock))
        }        
      )
      .catch(error => console.log(error)) 
    }
  }

  const updateHoldingStock = (ticker) => {
    return dispatch => { 
      return fetch(`https://cloud.iexapis.com/stable/stock/${ticker}/quote/?token=${apiKey}`)
      .then(res => {
        if (res.ok){
          return res.json()
        } else {
          throw Error
        }
      })
      .then(stock => {
          dispatch(updateHolding(stock))
        }        
      )
      .catch(error => console.log(error)) 
    }
  }
  
  export {fetchWatchlist, fetchHolding, fetchSingleStock,
     triggleTickerError, updateWatchlistStock,
     updateHoldingStock}
