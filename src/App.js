import React, { Component } from 'react';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <a href="#">Ecommerce</a>
        </header>
        <div className="container">
          <div className="products">
              <ProductList />
          </div>
          <div className="cart">
              <ShoppingCart />
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
