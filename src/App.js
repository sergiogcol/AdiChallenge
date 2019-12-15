import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import ProductDescriptionPage from './Components/ProductDescriptionPage/ProductDescriptionPage';
import Cart from './Components/Checkout/Cart';

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path='/' component={ProductDescriptionPage} />
          <Route path='/cart' component={Cart} />
        </div>
      </BrowserRouter>
    )
  }
}