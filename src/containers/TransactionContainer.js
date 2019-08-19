import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchTransactions} from '../actions/stockAction'
import Transaction from '../components/Transaction'
import { Table } from 'semantic-ui-react'


class TransactionContainer extends Component {

    componentDidMount = () => {
        this.props.fetchTransactions(this.props.user.id)
    }
    
    render() { 
    
        const list = this.props.transactions.map(
            transaction => <Transaction key = {transaction.id} transaction={transaction}/>
        )
        
        return ( 
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>Ticker</Table.HeaderCell>
                        <Table.HeaderCell>Type</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        <Table.HeaderCell>Quantity</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {list}
                </Table.Body>
            </Table>
         );
    }
}

const mapStateToProps = state => {
    return {
        transactions: state.transactions,
        user: state.user
    }
}
 
export default connect(mapStateToProps, {fetchTransactions})(TransactionContainer);