import React, { Component } from 'react'
import { productAvailability } from '../Product/productAvailability'
import SingleSelect from '../AuxiliaryComponents/SingleSelect'
import { connect } from 'react-redux'
import { CheckoutButton, CheckoutSpan } from '../Checkout/CartPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const initialState = {
  productAvailability,
  selectedProductSKU: null,
  productId: productAvailability.id,
  availabilityStatus: productAvailability.availability_status,
  price: 80.00,
  selectedProductQuantity: '1',
  productName: 'superstar shoes',
  productVersion: 'cloud white / core black / cloud white'
}

const GlobalStyle = createGlobalStyle`
  html{
    height: 100vh;
    width: 100vw;
  }
  body {
    box-sizing: border-box;
    margin: 2%;
    font-size: 16px;
    text-transform: uppercase;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`

const ButtonContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 250px;
  width: 90%;
`

class ProductDescriptionPage extends Component {
  state = {
    ...initialState
  };

  addSelected = (property, value, selectedSize) => {
    if (selectedSize) {
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
    const { selectedProductSKU, productId, selectedSize, availabilityStatus, price, selectedProductQuantity, productName, productVersion } = this.state;
    this.props.addProduct({ selectedProductSKU, productId, numberOfItemsOptions, selectedSize, availabilityStatus, price, selectedProductQuantity, productName, productVersion })
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
      <React.Fragment>
        <GlobalStyle />
        <ButtonContainer >
          <SingleSelect options={sizesOptions} addSelected={this.addSelected} property={'selectedProductSKU'} sendSize />
          <SingleSelect options={selectedProductSKU === null ? initialQuantityLabel : numberOfItemsOptions} addSelected={this.addSelected} property={'selectedProductQuantity'} />
          <CheckoutButton onClick={() => this.createBasket(numberOfItemsOptions)}>
            <CheckoutSpan>Add To Cart</CheckoutSpan>
            <div style={{ fontSize: '20px' }}>
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </div>
          </CheckoutButton>
        </ButtonContainer>
      </React.Fragment>
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
    addProduct: (data) => { dispatch({ type: 'ADD_PRODUCT', data }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDescriptionPage)
