import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchTransactions} from '../actions/stockAction'
import Transaction from '../components/Transaction'

class TransactionContainer extends Component {

    componentDidMount = () => {
        this.props.fetchTransactions(1)
    }
    
    render() { 
        return ( 
            <div>
                This is transaction
            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        watchlist: state.watchlist
    }
}
 
export default connect(mapStateToProps, {fetchTransactions})(TransactionContainer);