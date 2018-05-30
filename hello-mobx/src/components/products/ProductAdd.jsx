import React from 'react';
import './Products.css';

const ProductAdd = (props) => {
    
    return (
        <div>
            <label>Name</label>
            <input type="text" id="productName"/>

            <label>Description</label>
			<input type="text" id="productDescription"/>

            <label>Price</label>
			<input type="text" id="price"/>

            <button onClick={() => props.onAddProduct()}>Add</button>
        </div>
    )
};

export default ProductAdd;