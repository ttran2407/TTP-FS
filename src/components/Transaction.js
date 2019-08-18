import React, { Component } from 'react';

class Transaction extends Component {
    
    render() { 

        const {ticker, quantity, stock_price, transaction_type, created_at} = this.props.transaction
        return (
            <div>
                {created_at}
                {ticker}
                {quantity}
                {transaction_type}
                {stock_price}
            </div>
          );
    }
}
 
export default Transaction;