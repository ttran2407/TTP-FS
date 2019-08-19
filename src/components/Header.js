import React, { Component } from 'react';
import {Header, Segment, List} from 'semantic-ui-react'
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
            

            <List horizontal relaxed='very'>
                <List.Item>
                    <List.Content>
                        Hello
                        <List.Header > {this.props.user.name}</List.Header>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                        Value:
                        <List.Header > ${totalValue}</List.Header>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                        Buying Power:
                        <List.Header > ${this.props.user.cash}</List.Header>
                    </List.Content>
                </List.Item>
                <List.Item >
                    <List.Content >
                        <List.Header onClick={this.handleClick} as='a' textAlign="right">Log Out</List.Header>
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