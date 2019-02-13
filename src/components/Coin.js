import React, { Component } from 'react';

class Coin extends Component {

    subscribeClick(event){
        event.preventDefault()

        console.log("Subscribe clicked for coins with id", this.props.id)
    }

    renderHeader() {
        return (
            <tr>
                <th>#</th>
                <th>Symbol</th>
                <th>Name</th>
                <th>Status</th>
                <th>Description</th>
                <th>Price</th>
                <th>Subscribe</th>
            </tr>
        );
    }
    render(){
        if(this.props.isHeader){
            return this.renderHeader()
        }

        const { id, symbol, name, status, description, price } = this.props || {};
        return (
            <tr>
                <td>{id}</td>
                <td>{symbol}</td>
                <td>{name}</td>
                <td>{status}</td>
                <td>{description}</td>
                <td>{price}</td>
                <td> <a href="/" onClick={this.subscribeClick.bind(this)}>Подписаться</a></td>
            </tr>
        )
    }

 }

export default Coin