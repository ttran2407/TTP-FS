const initialState = {
    user: null,
    watchlist: [],
    holding: []
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
            let holding = action.payload.map(stock => {return {id: stock.id, ticker: stock.ticker, quantity: stock.quantity, value: 0}})
            newState.holding = holding
            return newState
        }

        default:
            return state
    
    }
}


export default rootReducer