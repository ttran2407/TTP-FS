import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchWatchlist} from '../actions/stockAction'
import WatchlistStock from '../components/WatchlistStock'

class WatchlistContainer extends Component {

    componentDidMount = () => {
        this.props.fetchWatchlist(1)
    }

    render() { 


        const list = this.props.watchlist.map(
            stock => <WatchlistStock key={stock.id} stock={stock}/>
        )
        return (
            <div className="watchlist-table">
               {list} 
            </div>
          );
    }
}

const mapStateToProps = state => {
    return {
        watchlist: state.watchlist
    }
}
 
export default connect(mapStateToProps, {fetchWatchlist})(WatchlistContainer);