import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react';
import ProductList from './components/ProductList';

@observer
class App extends Component {

  addProduct() {
    this.props.store.addProduct(document.getElementById('productName').value,
                                document.getElementById('productDescription').value,
                                document.getElementById('price').value
                              );
  }

  render() {

   return (
      <div className="App">
      <h1>Products</h1>
        <div>
            <input type="text" id="productName"/>
            <input type="text" id="productDescription"/>
            <input type="text" id="price"/>
            <button type="submit" onClick={() => this.addProduct()}>Add</button>
        </div>
        <ProductList store={this.props.store}/>
      </div>
    );
  }
}

export default App;
