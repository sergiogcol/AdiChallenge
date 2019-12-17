import React, { Component } from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import ProductSummaryBox from './CartComponents/ProductSummaryBox'
import CheckoutButtons from './CartComponents/CheckoutButtons'
import OrderSummaryBox from './CartComponents/OrderSummaryBox'
import { connect } from 'react-redux'


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
const PageTitleContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  box-sizing: border-box;
  width: 100%;
  margin: 0px;
  padding: 0px;
`
const PageTitle = styled.h1`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 26px;
`

const Link = styled.a`
  font-size: 0.8rem;
  text-decoration: underline;
  cursor: pointer;
  :hover {
    background-color: black;
    color:white
  }
  &.continueShopping {
    text-transform: uppercase;
    font-weight: bold;
  }
`
const TotalTitle = styled.p`
  font-weight: normal;
  margin: 0px;
  padding: 0px;
  & > em{
    font-style: normal;
    text-transform: uppercase
  }
`
const ContentContainer = styled.section`
  display: flex;
  width:100%;
`

class CartPage extends Component {
  
  addSelected = (property, value) => {
    this.setState({
      [property]: value
    })
  }

  render() {
    let totalQuantities = this.props.productsData.map( product => parseInt(product.selectedProductQuantity)).reduce( (total, item) => total+item)
    let pricePerQuantities = this.props.productsData.map( product => product.price*parseInt(product.selectedProductQuantity))
    let total = pricePerQuantities.reduce( (total, item) => total+item)
   
    let itemOrItems = totalQuantities>1 ? 'items' : 'item'
    return (
      <React.Fragment>
        <GlobalStyle />
        <PageTitleContainer>
          <PageTitle>your bag</PageTitle>
          <Link className='continueShopping'>continue shopping</Link>
        </PageTitleContainer>
        {this.props.productsData.map( product => {
          
        })}
        <TotalTitle>
          <em>total </em>
          {`:(${totalQuantities} ${itemOrItems})`}
          <strong>{` $${total}`}</strong>
        </TotalTitle>
        <ContentContainer>
          <div>
            <ProductSummaryBox size={'Size: M 5 / W 6'} stock={'in stock'} />
            <CheckoutButtons />
          </div>
          <OrderSummaryBox itemQuantity={totalQuantities} price={total} delivery={'free'} salesTax={'-'} total={total}/>
        </ContentContainer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productsData: state.productsData
  }
}

export default connect(mapStateToProps)(CartPage)