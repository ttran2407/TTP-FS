import React, { Component } from 'react';
import {connect} from 'react-redux'
import {updateWatchlistStock} from '../actions/stockAction'
import { Table } from 'semantic-ui-react'

class WatchlistStock extends Component {
    
    

    render() { 
        let {ticker, change} = this.props.stock
        let color

        if(change < 0){
            color = "red"
        } else if ( change === 0 ){color = "grey"} else {color = "green"}

        return (
            <Table.Row>
                <Table.Cell style ={{"color": color}} >{ticker}</Table.Cell>
                <Table.Cell>{(change * 100).toFixed(2)}%</Table.Cell>
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