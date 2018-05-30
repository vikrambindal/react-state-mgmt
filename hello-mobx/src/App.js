import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react';
import ProductList from './components/products/ProductList';
import ProductAdd from './components/products/ProductAdd';

@observer
class App extends Component {

  constructor(props) {
    super(props);
    this.addProduct = this.addProduct.bind(this);
  }

  addProduct(name, description, price) {
    var nameElem = document.getElementById('productName');
    var descriptionElem = document.getElementById('productDescription');
    var priceElem = document.getElementById('price');
    
    this.props.store.addProduct(nameElem.value, descriptionElem.value,priceElem.value);

    nameElem.value = '';
    descriptionElem.value = '';
    priceElem.value = '';
  }

  render() {

   return (
      <div>
      <h1>Products</h1>
        <ProductAdd onAddProduct={this.addProduct}/>
        <ProductList store={this.props.store}/>
      </div>
    );
  }
}

export default App;
