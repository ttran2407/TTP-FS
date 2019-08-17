import React, { Component } from 'react';
import {connect} from 'react-redux'
import {updateWatchlistStock} from '../actions/stockAction'

class WatchlistStock extends Component {
    
    componentDidMount = () => {
        this.props.updateWatchlistStock(this.props.stock.ticker)
    }

    render() { 
        return (
            <div>
                {this.props.stock.ticker}  
                {(this.props.stock.change * 100).toFixed(2)}%
            </div>
          );
    }
}

const mapStateToProps = state => {
    return {
        watchlist: state.watchlist
    }
}
 
export default connect(mapStateToProps, {updateWatchlistStock}) (WatchlistStock);