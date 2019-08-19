import React, { Component } from 'react';
import {connect} from 'react-redux'
import {createBuyTransaction, createSellTransaction} from '../actions/stockAction'
import {Button, Form, Header, Input } from 'semantic-ui-react'

class TradingStock extends Component {

    state = {
        quantity: 0,
        transaction_type: "BUY",
        notEnoughStock: false,
    }

    handleChangeQuantity  = (e) => {
        this.setState({
            quantity: e.target.value
        })
    }

    handleChangeType  = (e) => {
        let type 
        e.target.checked ? type = "SELL" : type = "BUY"
        this.setState({
            transaction_type: type
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.transaction_type === "SELL"){ //sell stock
            if (this.state.quantity > this.props.selectedStock.quantity){ //dont have enough stock
                this.setState({notEnoughStock: true})
            } else {
                this.props.createSellTransaction(this.state, this.props.user.id, this.props.selectedStock) //create sell transaction
            }
        } else { //buy stock
            if (this.state.quantity * this.props.selectedStock.latestPrice > parseFloat(this.props.user.cash)){ //dont have enough money
                this.setState({notEnoughMoney: true})
            } else {
                this.props.createBuyTransaction(this.state, this.props.user.id, this.props.selectedStock) //create buy transaction
            }
        }
    }

    
    render() { 
        let stock = this.props.holding.find(stock => stock.ticker === this.props.selectedStock.symbol)

        return (
            <div style={{"marginTop":"15px"}}>
                <Form onSubmit={this.handleSubmit}>
                
                    <Form.Field>
                    
                        <label style={{ "display": "flex"}} className='toggler__label'>

                            <div style={{"marginRight":"65px"}}>
                                <Header sub>Holding: </Header> 
                                {stock ? stock.quantity : 0} 
                            </div>

                            <input type="checkbox" hidden onChange={this.handleChangeType}/>
                            <Header  sub>BUY</Header>
                            <div style={{"marginLeft":"25px", "marginRight":"25px"}} className='toggler'></div>
                            <Header  sub>SELL</Header>
                        </label>

                    </Form.Field>

                    

                    <div style={{"display": "flex", "marginBottom":"15px"}}>
                    <Header sub style={{"marginTop":"10px"}} >Quantity</Header>
                    <Form.Field
                        style={{"marginLeft":"25px"}}
                        name="quantity"
                        onChange={this.handleChangeQuantity}
                        type='number'
                        min={1}
                        id='form-input-control-quantity'
                        control={Input}
                      
                        value={this.state.quantity}
                    />
                    </div>
                                 
                    <Button style={{"width": "115px"}} type="submit" >Submit</Button>
                    
                </Form>
           

                

                
               
            </div>
          );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        selectedStock: state.selectedStock,
        displayTickerError: state.displayTickerError,
        holding: state.holding
    }
}
 

export default connect (mapStateToProps, {createBuyTransaction, createSellTransaction})(TradingStock);

