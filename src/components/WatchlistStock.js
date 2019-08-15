import React, { Component } from 'react';

class WatchlistStock extends Component {
    
    render() { 
        return (
            <div>
                {this.props.stock.ticker}
                {this.props.stock.change}
            </div>
          );
    }
}
 
export default WatchlistStock;