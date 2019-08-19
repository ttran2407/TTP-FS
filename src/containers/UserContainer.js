import React, { Component } from 'react';
import WatchlistContainer from "./WatchlistContainer"
import HoldingContainer from "./HoldingContainer"
import TransactionContainer from "./TransactionContainer"
import { Grid} from 'semantic-ui-react'

import StockForm from '../components/StockForm'


class UserContainer extends Component {
    
    render() { 
        return (

            <div>

                <Grid style={{"height": "250px"}} columns={3} padded='vertically'>
                    <Grid.Column>
                        <WatchlistContainer/>
                    </Grid.Column>

                    <Grid.Column>
                        <StockForm/> 
                    </Grid.Column>

                    <Grid.Column>
                        <HoldingContainer/> 
                    </Grid.Column>            
                </Grid>

                <TransactionContainer/>  

            </div>
          );
    }
}
 
export default UserContainer;