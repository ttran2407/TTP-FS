import React, { Component } from 'react';
import TradingStock from '../components/TradingStock'
import {connect} from 'react-redux'
import {fetchSingleStock} from '../actions/stockAction'

import { Form, Button, Header } from 'semantic-ui-react'

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
                        <div style={{ "display": "flex"}}> 
                            <Header style={{"marginTop":"10px"}} sub>Ticker</Header>
                            <input style={{"marginLeft":"45px"}}  type="text" className="ticker" value={this.state.ticker} onChange={this.handleChange}/>
                        </div>
                     </Form.Field>

                     <div style={{ "display": "flex"}}>
                            <Button type="submit" name="tickerFinder" >Check Price</Button>
 
                            {(this.props.selectedStock && !this.props.displayTickerError) ?
                                 (<div style={{"marginLeft":"65px"}}>
                                     <Header sub>PRICE</Header>
                                     {this.props.selectedStock.latestPrice}
                                 </div>
                                  
                                 ) :
                                   null }          
                     </div>
                    
                    </Form>
                

                {this.props.displayTickerError ? <div> Invalid ticker, please re-enter </div> : null}
                 
                    
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
 
