import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchWatchlist} from '../actions/stockAction'
import WatchlistStock from '../components/WatchlistStock'

class WatchlistContainer extends Component {

    componentDidMount = () => {
        this.props.fetchWatchlist(this.props.user.id)
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
        watchlist: state.watchlist,
        user: state.user
    }
}
 
export default connect(mapStateToProps, {fetchWatchlist})(WatchlistContainer);