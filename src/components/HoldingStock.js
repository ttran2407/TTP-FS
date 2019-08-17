import React, { Component } from 'react';
import {connect} from 'react-redux'
import {updateHoldingStock} from '../actions/stockAction'

class HoldingStock extends Component {

    componentDidMount = () => {
        this.props.updateHoldingStock(this.props.stock.ticker)
    }
    
    render() { 
        return (
            <div>
                Ticker: {this.props.stock.ticker}
                Quantity: {this.props.stock.quantity}
                Price: {this.props.stock.price}
                Value: {this.props.stock.quantity * this.props.stock.price}
            </div>
          );
    }
}


 
export default connect(null, {updateHoldingStock}) (HoldingStock);
