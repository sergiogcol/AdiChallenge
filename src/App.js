import React, { Component } from 'react';
import { productAvailability } from "./Product/productAvailability"
import SingleSelect from './AuxiliaryComponents/SingleSelect';

const initialState = {
  productAvailability,
  selectedProductSKU: null,
}

export default class App extends Component {
  state = {
    ...initialState
  };
  /* componentDidMount() {
    fetch("https://www.adidas.com/api/products/EG4958/availability")
      .then(res => res.json())
      .then((data) => {
        this.setState({ data })
      })
      .catch(console.log)
  } */
  addSelected = (property,value) => {
    this.setState({
      [property]: value
    })
  }
  render() {
    const { productAvailability, selectedProductSKU } = this.state;
    const sizesOptions = productAvailability.variation_list.map(item => { return { label: item.size, value: item.sku } });
    
    const availabilityQuantity = {}
    productAvailability.variation_list.forEach(item => availabilityQuantity[item.sku] = item.availability)
    
    let numberOfItemsOptions = [];
    for (let i = 0; i <= availabilityQuantity[selectedProductSKU]; i++) {
      numberOfItemsOptions.push({value:i, label:i})
    }

    let initialSelectLabel = [{value:null, label:'SELECT SIZE'}]
    let initialQuantityLabel = [{value:null, label:1}]

    return (
      <div >
        <SingleSelect options={ selectedProductSKU === null ? initialSelectLabel : sizesOptions} addSelected={this.addSelected} property={'selectedProductSKU'} />
        <SingleSelect options={ selectedProductSKU === null ? initialQuantityLabel : numberOfItemsOptions} addSelected={this.addSelected} property={'selectedProductQuantity'}/>
      </div>
    );
  }
}


