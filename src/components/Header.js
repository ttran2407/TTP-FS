import React, { Component } from 'react';
import { List} from 'semantic-ui-react'
import {connect} from 'react-redux'

class Top extends Component {

     handleClick = () => {
        localStorage.clear("token")
        window.location.reload()
    }
    
    render() { 

        let totalValue = this.props.holding.reduce((acc, stock) => 
            acc + stock.quantity * stock.price, 0
        )
        return ( 
            

            <List style={{"marginLeft": "350px"}} horizontal relaxed='very'>
                <List.Item>
                    <List.Content>
                        Hello
                        <List.Header > {this.props.user.name}</List.Header>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                        Value:
                        <List.Header > ${totalValue.toFixed(2)}</List.Header>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                        Buying Power:
                        <List.Header > ${parseFloat(this.props.user.cash).toFixed(2)}</List.Header>
                    </List.Content>
                </List.Item>
                <List.Item >
                    <List.Content >
                        <List.Header style={{"marginLeft": "150px"}} onClick={this.handleClick} as='a' >Log Out</List.Header>
                    </List.Content>
                </List.Item>
            </List>
            
         );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        holding: state.holding
    }
}
 
export default connect (mapStateToProps, null) (Top);