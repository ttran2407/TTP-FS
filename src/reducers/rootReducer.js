import {stockStore} from './stockStore.js'

const initialState = {
    user: null,
    watchlist: [],
    holding: [],
    stocks: stockStore,
    selectedStock: null,
    displayTickerError: false
}


// ---------------- REDUCER -----------------------

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case('GET_WATCH_LIST'): {
            let newState = {...state}
            let watchlist = action.payload.map(stock => {return {id: stock.id, ticker: stock.ticker, change: 0}})
            newState.watchlist = watchlist
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

        

        

        default:
            return state
    
    }
}


export default rootReducer