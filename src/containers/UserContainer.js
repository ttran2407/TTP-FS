import React, { Component } from 'react';
import WatchlistContainer from "./WatchlistContainer"
import HoldingContainer from "./HoldingContainer"
import TransactionContainer from "./TransactionContainer"
import { Grid, Header} from 'semantic-ui-react'
import {connect} from 'react-redux'

import StockForm from '../components/StockForm'
import Top from '../components/Header'


class UserContainer extends Component {
    
    render() { 
        return (

            <div>

                <Top />

                <Grid style={{"textAlign": "center", "height": "350px"}} columns={3} padded='vertically'>
                    <Grid.Column>
                        <Header style={{"marginBottom": "10px"}} sub>Watchlist</Header>
                        <WatchlistContainer/>
                    </Grid.Column>

                    <Grid.Column>
                        <Header style={{"marginBottom": "10px"}} sub>Trading</Header>
                        <StockForm/> 
                    </Grid.Column>

                    <Grid.Column>
                        <Header style={{"marginBottom": "10px"}} sub>Holding</Header>
                        <HoldingContainer/> 
                    </Grid.Column>            
                </Grid>

                <div >
                    <Header style={{"textAlign": "center", "marginBottom": "10px"}} sub>Transactions</Header> 
                    <TransactionContainer/>
                </div>
                  

            </div>
          );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}
 
export default connect(mapStateToProps, null)( UserContainer);