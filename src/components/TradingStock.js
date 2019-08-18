import React, { Component } from 'react';
import {connect} from 'react-redux'
import {createBuyTransaction} from '../actions/stockAction'

class TradingStock extends Component {

    state = {
        quantity: 0,
        transaction_type: "BUY",
        notEnoughStock: false,
    }

    handleChangeQuantity  = (e) => {
        this.setState({
            quantity: e.target.value
        })
    }

    handleChangeType  = (e) => {
        let type 
        e.target.checked ? type = "SELL" : type = "BUY"
        this.setState({
            type: type
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.type === "SELL"){ //sell stock
            if (this.state.quantity > this.props.selectedStock.quantity){ //dont have enough stock
                this.setState({notEnoughStock: true})
            } else {
                return //create sell transaction
            }
        } else { //buy stock
            // if (this.state.quantity * this.props.selectedStock.latestPrice > user_money){ //dont have enough money
            //     this.setState({notEnoughMoney: true})
            // } else {
                this.props.createBuyTransaction(this.state, 1, this.props.selectedStock) //create buy transaction
            // }
        }
    }

    
    render() { 
        let stock = this.props.holding.find(stock => stock.ticker === this.props.selectedStock.symbol)

        return (
            <div>
                Let get a trade
                <form onSubmit = {this.handleSubmit}>

                <label className='toggler__label'>
                    <input type="checkbox" hidden onChange={this.handleChangeType}/>
                    <span>Buy</span>
                    <div className='toggler'></div>
                    <span>Sell</span>
                </label>

                <label>Currently holding</label> 
                <div>{stock ? stock.quantity : 0}</div>               

                <label >Quantity</label>
                <input type="text" className="transaction-quantity" value={this.state.quantity} onChange={this.handleChangeQuantity}/>
                <button type="submit" >Submit</button>
                </form>
            </div>
          );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        selectedStock: state.selectedStock,
        displayTickerError: state.displayTickerError,
        holding: state.holding
    }
}
 

export default connect (mapStateToProps, {createBuyTransaction})(TradingStock);

