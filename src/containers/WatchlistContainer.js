import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchWatchlist} from '../actions/stockAction'
import WatchlistStock from '../components/WatchlistStock'
import { Table } from 'semantic-ui-react'

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
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>                
                            <Table.HeaderCell>Ticker</Table.HeaderCell>
                            <Table.HeaderCell>Change</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {list}
                    </Table.Body>
                </Table>
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