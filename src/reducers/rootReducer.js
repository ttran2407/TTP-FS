

const initialState = {
    user: null,
    watchlist: [],
    transactions: [],
    holding: [],
    selectedStock: null,
    displayTickerError: false,
    
}


// ---------------- REDUCER -----------------------

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case('GET_USER'): {
            let newState = {...state}
            newState.user = action.payload
            return newState
        }
        case('GET_WATCH_LIST'): {
            let newState = {...state}
            let watchlist = action.payload.map(stock => {return {id: stock.id, ticker: stock.ticker, change: 0}})
            newState.watchlist = watchlist
            return newState
        }
        case('GET_TRANSACTIONS'): {
            let newState = {...state}
            let transactions = action.payload
            newState.transactions = transactions
            return newState
        }

        case('GET_HOLDING'): {
            let newState = {...state}
            let holding = action.payload.map(stock => {return {id: stock.id, ticker: stock.ticker, quantity: stock.quantity, price: 0}})
            newState.holding = holding
            return newState
        }
        case('GET_SINGLE_STOCK'): {
            let newState = {...state}
            newState.selectedStock = action.payload
            return newState
        }

        case('TRIGGLE_TICKER_ERROR'): {
            let newState = {...state}
            newState.displayTickerError = true
            return newState
        }

        case('CANCEL_TICKER_ERROR'): {
            let newState = {...state}
            newState.displayTickerError = false
            return newState
        }


        case('UPDATE_WATCHLIST'): {
            let stock = state.watchlist.find(stock => stock.ticker === action.payload.symbol)
            let idx = state.watchlist.indexOf(stock)
            let newStock = {...state.watchlist[idx], change: action.payload.changePercent}
            let newWatchlist = [...state.watchlist]
            newWatchlist[idx] = newStock
            let newState = {...state, watchlist: newWatchlist}

            return newState
          }

          case('UPDATE_HOLDING'): {
            let stock = state.holding.find(stock => stock.ticker === action.payload.symbol)
            let idx = state.holding.indexOf(stock)
            let newStock = {...state.holding[idx], price: action.payload.latestPrice, change: action.payload.changePercent}
            let newHolding = [...state.holding]
            newHolding[idx] = newStock
            let newState = {...state, holding: newHolding}

            return newState
          }

          case('ADD_TRANSACTION'): {
            let newTransactions = [...state.transactions]
            newTransactions.push(action.payload)
            let newState = {...state, transactions: newTransactions}

            return newState
          }

        default:
            return state
    
    }
}


export default rootReducer