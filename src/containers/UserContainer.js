import React, { Component } from 'react';
import WatchlistContainer from "./WatchlistContainer"
import HoldingContainer from "./HoldingContainer"


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
                
                
            </div>
          );
    }
}
 
export default UserContainer;