import React, { Component } from 'react';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import './App.css';
import { postForm } from './actionCreators';

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
          
          <form id="test-form">
            <div>
              <label>Nombre Completo</label>
              <input type="text" name="nombre" placeholder="Nombre completo"/>
            </div>
            <div>
              <label>Mail</label>
              <input type="text" name="mail" placeholder="Mail"/>
            </div>
            <div>
              <label>Celular</label>
              <input type="text" name="telefono" placeholder="Celular"/>
            </div>
            <div>
              <label>Comentario</label>
              <input type="text" name="consulta" placeholder="comentario"/>
            </div>
            <div>
              <button type="submit" id="submit-form" onClick={(e) => {
                e.preventDefault();
                console.log("aaaa")
                postForm({
                  nombre: encodeURIComponent(document.querySelector("[name=nombre]").value),
                  mail: encodeURIComponent(document.querySelector("[name=mail]").value),
                  telefono: encodeURIComponent(document.querySelector("[name=telefono]").value),
                  consulta: encodeURIComponent(document.querySelector("[name=consulta]").value),
                })
              }}>Enviar</button>
            </div>

          </form>
        </div>
        
      </div>
    );
  }
}

export default App;
