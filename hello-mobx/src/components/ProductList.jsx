import React, { Component } from 'react';
import { observer } from 'mobx-react';

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
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Description</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {products.length === 0 ? <tr><td colSpan="3">No products exist</td></tr> : prodHtml}
                    <tr>
                        <td colSpan="2">Total Price</td>
                        <td>{totalPrice}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )}
}

