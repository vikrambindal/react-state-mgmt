import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './Products.css';

@observer
export default class ProductList extends Component {

    render() {

        const {products, totalPrice} = this.props.store;
        const prodHtml = products.map(product => {
            return <tr key={product.name}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
            </tr>
          });

        return (
        <div>
            {products.length === 0 ? <p>No Products currently exist</p> :
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Description</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {prodHtml}
                    <tr>
                        <td colSpan="2">Total Price</td>
                        <td>{totalPrice}</td>
                    </tr>
                </tbody>
            </table>}
        </div>
    )}
}

