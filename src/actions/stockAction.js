/* ---------- ACTION CREATORS ------------- */
const getUser = (user) => ({type: "GET_USER", payload: user})
const getWatchlist = (watchlist) => ({type: "GET_WATCH_LIST", payload: watchlist})
const getHolding = (holding) => ({type: "GET_HOLDING", payload: holding})
const getTransactions = (transactions) => ({type: "GET_TRANSACTIONS", payload: transactions})
const getSingleStock = (stock) => ({type: "GET_SINGLE_STOCK", payload: stock})
const triggleTickerError = () => ({type: "TRIGGLE_TICKER_ERROR"})
const cancelTickerError = () => ({type: "CANCEL_TICKER_ERROR"})
const updateWatchlist = (stock) => ({type: "UPDATE_WATCHLIST", payload: stock})
const updateHolding = (stock) => ({type: "UPDATE_HOLDING", payload: stock})
const addTransaction = (transaction) => ({type: "ADD_TRANSACTION", payload: transaction})


/* ---------- THUNK CREATORS ------------- */

const apiKey = process.env.REACT_APP_API_KEY


const fetchTransactions = (user_id) => {
  // let token = localStorage.getItem("token")
  return dispatch => {
    return fetch(`http://localhost:3000/users/${user_id}/transactions`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Action": "application/json",
      //   "Authorization": `${token}`
      }
    })
    .then(res => res.json())
    .then(transactions => {
       dispatch(getTransactions(transactions))
          // watchlist.forEach(stock => updateWatchlistChange(stock.stock_symbol, dispatch))
        })
  }
}

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

  const createBuyTransaction = (transaction, user_id, stock) => {
    // let token = localStorage.getItem("token")
    return dispatch => {
      return fetch(`http://localhost:3000/users/${user_id}/transactions`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Action": "application/json",
          // "Authorization": `${token}`
        },
        body: JSON.stringify({
          user_id: parseInt(user_id),
          quantity: parseInt(transaction.quantity),
          stock_price: parseFloat(stock.latestPrice),
          ticker: stock.symbol,
          transaction_type: transaction.transaction_type
        })
      })
      .then(res => res.json())
      .then(array => {
        createHoldingStock(array[0], dispatch)
        dispatch(addTransaction(array[0]))
      })
    }
  }

  const createHoldingStock = (transaction, dispatch) => {
    // let token = localStorage.getItem("token")

      fetch(`http://localhost:3000/users/${transaction.user_id}/holdings`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Action": "application/json",
          // "Authorization": `${token}`
        },
        body: JSON.stringify({
          user_id: transaction.user_id,
          stock_id: transaction.stock_id,
          quantity: transaction.quantity,
          ticker: transaction.ticker,
          stock_price: transaction.stock_price
        })
      })
      .then(res => res.json())
      .then(object => {
        dispatch(getUser(object.user))
        dispatch(getHolding(object.holdings))
  
      })
  }

  const createSellTransaction = (transaction, user_id, stock) => {
    // let token = localStorage.getItem("token")
    return dispatch => {
      return fetch(`http://localhost:3000/users/${user_id}/transactions`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Action": "application/json",
          // "Authorization": `${token}`
        },
        body: JSON.stringify({
          user_id: parseInt(user_id),
          quantity: parseInt(transaction.quantity),
          stock_price: parseFloat(stock.latestPrice),
          ticker: stock.symbol,
          transaction_type: transaction.transaction_type
        })
      })
      .then(res => res.json())
      .then(array => {

        destroyHoldingStock(array[0], dispatch, array[1])
        dispatch(addTransaction(array[0]))
      })
      
    }
  }

  const destroyHoldingStock = (transaction, dispatch, holdingstock) => {
    // let token = localStorage.getItem("token")
      fetch(`http://localhost:3000/users/${transaction.user_id}/holdings/${holdingstock.id}`,{
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Action": "application/json",
          // "Authorization": `${token}`
        },
        body: JSON.stringify({
          user_id: transaction.user_id,
          stock_id: transaction.stock_id,
          quantity: transaction.quantity,
          ticker: transaction.ticker,
          stock_price: transaction.stock_price,
          id: holdingstock.id
        })
      })
      .then(res => res.json())
      .then(object => {
        dispatch(getUser(object.user))
        dispatch(getHolding(object.holdings))
      })
  }

  
  
  export {fetchWatchlist, fetchHolding, fetchSingleStock,
     triggleTickerError, updateWatchlistStock,
     updateHoldingStock, fetchTransactions, createBuyTransaction,
     createSellTransaction}

