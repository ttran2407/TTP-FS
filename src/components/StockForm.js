import React, { Component } from 'react';
import TradingStock from '../components/TradingStock'
import {connect} from 'react-redux'
import {fetchSingleStock} from '../actions/stockAction'

import { Form, Button } from 'semantic-ui-react'

class StockForm extends Component {
    
    state = {
        type: "buy",
        ticker: "",
        price: 0,
        quantity: 0,

    }

    handleChange = (e) => {
        
        this.setState({
            ticker: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.fetchSingleStock(this.state.ticker)
        this.setState({
            displayOption: false
        })
    }
 
    render() {

        return (


            <div>
                <Form onSubmit={this.handleSubmit}>
                
                    <Form.Field>
                        <label >Ticker</label>
                        <input type="text" className="ticker" value={this.state.ticker} onChange={this.handleChange}/>
                    </Form.Field>
                    
                    <Button type="submit" name="tickerFinder" >Check Price</Button>
                </Form>
                

                {this.props.displayTickerError ? <div> Invalid ticker, please re-enter </div> : null}
                {(this.props.selectedStock && !this.props.displayTickerError) ?  ( this.props.selectedStock.latestPrice) : null } 
                    
                { (this.props.selectedStock && !this.props.displayTickerError)? <TradingStock /> : null}

            </div>
            
          );
    }
}

const mapStateToProps = state => {
    return {
        selectedStock: state.selectedStock,
        displayTickerError: state.displayTickerError
    }
}
 
export default connect (mapStateToProps, {fetchSingleStock})(StockForm);
 
