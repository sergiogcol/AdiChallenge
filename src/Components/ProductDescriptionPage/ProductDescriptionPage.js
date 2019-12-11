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
    this.props.history.push('/cart')
  }

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
