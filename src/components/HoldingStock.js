import React, { Component } from 'react';

class HoldingStock extends Component {
    
    render() { 
        return (
            <div>
                {this.props.stock.ticker}
                {this.props.stock.quantity}
                {this.props.stock.price}
            </div>
          );
    }
}
 
export default HoldingStock;