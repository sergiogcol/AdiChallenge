import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import ProductDescriptionPage from './Components/ProductDescriptionPage/ProductDescriptionPage';
import CartPage from './Components/Checkout/CartPage';

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path='/' component={ProductDescriptionPage} />
          <Route path='/cart' component={CartPage} />
        </div>
      </BrowserRouter>
    )
  }
}