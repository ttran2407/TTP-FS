import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

class HoldingStock extends Component {

    
    render() { 
        let {ticker, quantity, price, change} = this.props.stock 

        let color

        if(change < 0){
            color = "red"
        } else if ( change === 0 ){color = "grey"} else {color = "green"}
        
        return (
        

                <Table.Row>
                    <Table.Cell style={{"color": color}}>{ticker}</Table.Cell>
                    <Table.Cell>{quantity}</Table.Cell>
                    <Table.Cell>{price}</Table.Cell>
                    <Table.Cell>{(quantity * price).toFixed(2)}</Table.Cell>
                </Table.Row>

          );
    }
}



export default HoldingStock;
