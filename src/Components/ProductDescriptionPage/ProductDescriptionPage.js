import React, { Component } from 'react'
import { productAvailability } from '../Product/productAvailability'
import SingleSelect from '../AuxiliaryComponents/SingleSelect'

const initialState = {
  productAvailability,
  selectedProductSKU: null,
}

export default class ProductDescriptionPage extends Component {
  state = {
    ...initialState
  };

  addSelected = (property, value) => {
    this.setState({
      [property]: value
    })
  }

  createBasket = () => {

    fetch("https://www.adidas.com/api/checkout/baskets", {
      crossDomain: true,
      method: 'POST'
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      /* .then((data) => {
       console.log(data)
       this.setState({ data })
     }) */
      .catch(console.log)
      //.then(() => this.props.history.push('/cart'))
  }

  /* createBasket = () => {

    const sendHttpRequest = (method, url, data) => {
      const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.responseType = 'json';
        xhr.withCredentials = true

        if (data) {
          xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
          //xhr.setRequestHeader('mode', []);
          
        }

        xhr.onload = () => {
          if (xhr.status >= 400) {
            reject(xhr.response);
          } else {
            resolve(xhr.response);
          }
        };

        xhr.onerror = () => {
          reject('Something went wrong!');
        };

        xhr.send(JSON.stringify(data));
      });
      return promise;
    };

    sendHttpRequest('POST', 'https://www.adidas.com/api/checkout/baskets')
      .then(responseData => {
        this.setState({
          selectedProductSKU: responseData
        })
      })
      .catch(err => {
        console.log(err);
      });
  } */
  // id: selectedProductSKU

  render() {
    const { productAvailability, selectedProductSKU } = this.state;
    const sizesOptions = productAvailability.variation_list.map(item => { return { label: item.size, value: item.sku } });

    const availabilityQuantity = {}
    productAvailability.variation_list.forEach(item => availabilityQuantity[item.sku] = item.availability)

    let numberOfItemsOptions = [];
    for (let i = 0; i <= availabilityQuantity[selectedProductSKU]; i++) {
      numberOfItemsOptions.push({ value: i, label: i })
    }

    let initialSelectLabel = [{ value: null, label: 'SELECT SIZE' }]
    let initialQuantityLabel = [{ value: null, label: 1 }]

    return (
      <div >
        <SingleSelect options={selectedProductSKU === null ? initialSelectLabel : sizesOptions} addSelected={this.addSelected} property={'selectedProductSKU'} />
        <SingleSelect options={selectedProductSKU === null ? initialQuantityLabel : numberOfItemsOptions} addSelected={this.addSelected} property={'selectedProductQuantity'} />
        <button onClick={() => this.createBasket()}>Add To Cart</button>
      </div>
    );
  }
}
