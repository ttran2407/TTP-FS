import React, { Component } from 'react';
import {connect} from 'react-redux'

class TradingStock extends Component {

    state = {
        quantity: 0,
        type: false
    }

    handleChangeQuantity  = (e) => {
        this.setState({
            quantity: e.target.value
        })
    }

    handleChangeType  = (e) => {
        
        this.setState({
            type: e.target.checked
        })
        
    }

    
    render() { 

        return (
            <div>
                Let get a trade
                <form>

                <label className='toggler__label'>
                    <input type="checkbox" hidden onChange={this.handleChangeType}/>
                    <span>Buy</span>
                    <div className='toggler'></div>
                    <span>Sell</span>
                </label>

                

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
 

export default connect (mapStateToProps, null)(TradingStock);


//buy or sell stock

//form - quantity, button