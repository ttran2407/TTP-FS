import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

class HoldingStock extends Component {

    
    render() { 
        return (

                <Table.Row>
                    <Table.Cell>{this.props.stock.ticker}</Table.Cell>
                    <Table.Cell>{this.props.stock.quantity}</Table.Cell>
                    <Table.Cell>{this.props.stock.price}</Table.Cell>
                    <Table.Cell>{(this.props.stock.quantity * this.props.stock.price).toFixed(2)}</Table.Cell>
                </Table.Row>

          );
    }
}



export default HoldingStock;
