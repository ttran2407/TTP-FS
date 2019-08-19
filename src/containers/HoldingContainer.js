import React, { Component } from 'react';
import {fetchHolding} from '../actions/stockAction'
import HoldingStock from '../components/HoldingStock'
import {connect} from 'react-redux'
import { Table } from 'semantic-ui-react'

class HoldingContainer extends Component {

    componentDidMount = () => {
        this.props.fetchHolding(this.props.user.id)
    }
    
    render() { 
        

        const list = this.props.holding.map(
            stock => <HoldingStock key={stock.id} stock={stock}/>
        )
        return (
            <div className="holding-table" >
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Ticker</Table.HeaderCell>
                            <Table.HeaderCell>Quantity</Table.HeaderCell>                            
                            <Table.HeaderCell>Price</Table.HeaderCell>
                            <Table.HeaderCell>Value</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    
                         <Table.Body >
                        {list}
                        </Table.Body>
                    
                </Table>
            </div>
          );
    }
}

const mapStateToProps = state => {
    return {
        holding: state.holding,
        user: state.user
    }
}
 

export default connect(mapStateToProps, {fetchHolding})(HoldingContainer);
 
