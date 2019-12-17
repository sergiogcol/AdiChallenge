import React, { Component } from 'react'
import { productAvailability } from '../Product/productAvailability'
import SingleSelect from '../AuxiliaryComponents/SingleSelect'
import { connect } from 'react-redux'

const initialState = {
  productAvailability,
  selectedProductSKU: null,
  productId: productAvailability.id,
  availabilityStatus:productAvailability.availability_status,
  price: 80.00,
  selectedProductQuantity: '1'
}

class ProductDescriptionPage extends Component {
  state = {
    ...initialState
  };

  addSelected = (property, value, selectedSize) => {
    if (selectedSize){
      this.setState({
        [property]: value,
        selectedSize
      })
    } else {
      this.setState({
        [property]: value
      })
    } 
  }

  /* createBasket = () => {
    fetch("https://www.adidas.com/api/checkout/baskets", {
      crossDomain: true,
      method: 'POST'
    })
      .then(res => { res.json()})
      .then((data) => {
       this.setState({ productAvailability: data })
     })
      .catch(console.log)
      .then(() => this.props.history.push('/cart'))
  } */

  createBasket = (numberOfItemsOptions) => {
    const {selectedProductSKU, productId, selectedSize, availabilityStatus, price, selectedProductQuantity } = this.state;
    this.props.addProduct({selectedProductSKU, productId, numberOfItemsOptions, selectedSize, availabilityStatus, price, selectedProductQuantity})
    this.props.history.push('/cart')
    /* this.setState({
      addProductToBasket: {
        'Content-Type': 'application/json',
        'body': [{
          'productId': productAvailability.id,
        }]
      }
    }) */
  }
  
  render() {
    const { productAvailability, selectedProductSKU } = this.state;
    const availableSizes = productAvailability.variation_list.filter(item => {
      return item.availability !== 0
    })

    const sizesOptions = availableSizes.map(item => {
      return { label: item.size, value: item.sku }
    });

    let initialSelectLabel = { value: null, label: 'SELECT SIZE' }
    sizesOptions.unshift(initialSelectLabel)

    const availabilityQuantity = {}
    productAvailability.variation_list.forEach(item => availabilityQuantity[item.sku] = item.availability)

    let numberOfItemsOptions = [];
    for (let i = 1; i <= availabilityQuantity[selectedProductSKU]; i++) {
      numberOfItemsOptions.push({ value: i, label: i })
    }

    let initialQuantityLabel = [{ value: null, label: 1 }]

    return (
      <div >
        <SingleSelect options={sizesOptions} addSelected={this.addSelected} property={'selectedProductSKU'} sendSize />
        <SingleSelect options={selectedProductSKU === null ? initialQuantityLabel : numberOfItemsOptions} addSelected={this.addSelected} property={'selectedProductQuantity'} />
        <button onClick={() => this.createBasket(numberOfItemsOptions)}>Add To Cart</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productsData: state.productsData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (data) => { dispatch({type: 'ADD_PRODUCT', data})}
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(ProductDescriptionPage)
