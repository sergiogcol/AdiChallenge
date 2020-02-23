import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import ProductDescriptionPage from './Components/ProductDescriptionPage/NewProductDescriptionPage';
import CartPage from './Components/Checkout/NewCartPage';
import ProductDataContextProvider from './Contexts/ProductDataContext';

export default class App extends Component {

  render() {
    return (

      <BrowserRouter>
        <div>
          <Navbar />
          <ProductDataContextProvider>
            <Route exact path='/' component={ProductDescriptionPage} />
            <Route path='/cart' component={CartPage} />
          </ProductDataContextProvider>
        </div>
      </BrowserRouter>

    )
  }
}