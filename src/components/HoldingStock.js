import React, { Component } from 'react';
import {connect} from 'react-redux'
import {updateHoldingStock} from '../actions/stockAction'
import { Table } from 'semantic-ui-react'

class HoldingStock extends Component {

    componentDidMount = () => {
        this.props.updateHoldingStock(this.props.stock.ticker)
    }
    
    render() { 
        return (

                <Table.Row>
                    <Table.Cell>{this.props.stock.ticker}</Table.Cell>
                    <Table.Cell>{this.props.stock.quantity}</Table.Cell>
                    <Table.Cell>{this.props.stock.price}</Table.Cell>
                    <Table.Cell>{this.props.stock.quantity * this.props.stock.price}</Table.Cell>
                </Table.Row>

          );
    }
}


 
export default connect(null, {updateHoldingStock}) (HoldingStock);
