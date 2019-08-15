import React, { Component } from 'react';
import {fetchHolding} from '../actions/stockAction'
import HoldingStock from '../components/HoldingStock'
import {connect} from 'react-redux'


class HoldingContainer extends Component {

    componentDidMount = () => {
        this.props.fetchHolding(1)
    }
    
    render() { 
        const list = this.props.holding.map(
            stock => <HoldingStock key={stock.id} stock={stock}/>
        )
        return (
            <div className="holding-table">
                This is Holding
                {list}
            </div>
          );
    }
}

const mapStateToProps = state => {
    return {
        holding: state.holding
    }
}
 

export default connect(mapStateToProps, {fetchHolding})(HoldingContainer);
 
