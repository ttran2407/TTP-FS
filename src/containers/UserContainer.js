import React, { Component } from 'react';
import WatchlistContainer from "./WatchlistContainer"
import HoldingContainer from "./HoldingContainer"
import TransactionContainer from "./TransactionContainer"

import StockForm from '../components/StockForm'


class UserContainer extends Component {
    
    render() { 
        return (
            <div>
                <div>
                    <WatchlistContainer/>
                </div>

                <div>
                    <HoldingContainer/> 
                </div>

                <div>
                <StockForm/> 
                </div>

                <div>
                <TransactionContainer/> 
                </div>
                
                
            </div>
          );
    }
}
 
export default UserContainer;