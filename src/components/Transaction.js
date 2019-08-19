import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

class Transaction extends Component {
    
    render() { 

        const {ticker, quantity, stock_price, transaction_type, created_at} = this.props.transaction
        return (

            <Table.Row>
                <Table.Cell>
                    {  new Date(created_at).toLocaleTimeString() }
                    {"  "}
                    {  new Date(created_at).toLocaleDateString() }
                </Table.Cell>
                <Table.Cell>{ticker}</Table.Cell>
                <Table.Cell>{transaction_type}</Table.Cell>
                <Table.Cell>{stock_price}</Table.Cell>
                <Table.Cell>{quantity}</Table.Cell>
            </Table.Row>

          );
    }
}
 
export default Transaction;