import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actions } from '../redux/modules/coin'
import _ from 'lodash'
import Table from 'react-bootstrap/Table'
import Coin from './Coin'


import { coinSelector, isFetchingSelector } from '../redux/selectors/coinSelector'

class CoinsList extends Component {

    componentDidMount(){
        this.props.getCoin();
    }

    renderHeader(){
        return  <Coin isHeader />
    }
    renderCoins(payload={}){
        const {data = []} = this.props.data || {}
        return _.map(data,(coinData,key)=>{
            return <Coin key={key} {...coinData} />
        })
    }

    render() {

        const { data, dataFetching } = this.props;
        if (dataFetching || !data) {
            return <div>Loading...</div>
        }
        return (

                   <div className="col-xs-12 col-md-8 col-centered ">
                       <Table responsive  hover variant="dark" style={{backgroundColor: "rgba(0,0,0,0.5)"}}>
                           <thead>{this.renderHeader()}</thead>
                           <tbody>{this.renderCoins()}</tbody>
                       </Table>
                   </div>

        )

    }
 }

const mapDispatchToProps = {
   ...actions
};

const mapStateToProps = (state) => ({
    ...coinSelector(state),
    dataFethcing:isFetchingSelector(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CoinsList)