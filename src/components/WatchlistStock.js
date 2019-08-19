import React, { Component } from 'react';
import {connect} from 'react-redux'
import {updateWatchlistStock} from '../actions/stockAction'
import { Table } from 'semantic-ui-react'

class WatchlistStock extends Component {
    
    

    render() { 
        return (
            <Table.Row>
                <Table.Cell>{this.props.stock.ticker}</Table.Cell>
                <Table.Cell>{(this.props.stock.change * 100).toFixed(2)}%</Table.Cell>
            </Table.Row>
            
          );
    }
}

const mapStateToProps = state => {
    return {
        watchlist: state.watchlist
    }
}
 
export default connect(mapStateToProps, {updateWatchlistStock}) (WatchlistStock);