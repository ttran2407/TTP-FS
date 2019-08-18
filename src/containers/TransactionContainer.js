import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchTransactions} from '../actions/stockAction'
import Transaction from '../components/Transaction'

class TransactionContainer extends Component {

    componentDidMount = () => {
        this.props.fetchTransactions(this.props.user.id)
    }
    
    render() { 
    
        const list = this.props.transactions.map(
            transaction => <Transaction key = {transaction.id} transaction={transaction}/>
        )
        
        return ( 
            <div>
                {list}
            </div>
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