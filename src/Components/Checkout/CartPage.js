import React, { Component } from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import ProductSummaryBox from './CartComponents/ProductSummaryBox'
import CheckoutButtons from './CartComponents/CheckoutButtons'
import OrderSummaryBox from './CartComponents/OrderSummaryBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
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
  &.emptyBag{
    flex-direction: column;
    align-items: flex-start; 
    text-transform:lowercase;
  }
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

export const CheckoutButton = styled.button`
  width: 17%;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  transform: translate(-3px,-3px);
  letter-spacing: 2px;
  height: 50px;
  justify-content: space-between;
  background-color: black;
  color: white;
  align-items: center;
  border: none;
  border-radius: 0;
  cursor: pointer;
  display: inline-flex;
  line-height: 50px;
  min-height: 50px;
  padding: 0 21px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: transform .1s cubic-bezier(.3,0,.45,1),color .1s cubic-bezier(.3,0,.45,1),border .1s cubic-bezier(.3,0,.45,1),background .1s cubic-bezier(.3,0,.45,1);
  white-space: nowrap;
  margin: 0;
  &::before{
    border-bottom: 1px solid #000;
    border-left: 1px solid #000;
    bottom: -3px;
    height: 3px;
    left: 3px;
    width: 100%;
    content: "";
    display: block;
    position: absolute;
    transition: .1s cubic-bezier(.3,0,.45,1);
  }
  &::after{
    border-right: 1px solid #000;
    border-top: 1px solid #000;
    height: 100%;
    right: -3px;
    top: 3px;
    width: 3px;
  }
  &::after, &::before{
    content: "";
    display: block;
    position: absolute;
    transition: .1s cubic-bezier(.3,0,.45,1);
  }
`
export const CheckoutSpan = styled.span`
  flex: 1 1 auto;
`

class CartPage extends Component {

  addSelected = (property, value) => {
    this.setState({
      [property]: value
    })
  }
  returnHome = () => {
    this.props.history.push('/')
  }

  render() {
    console.log(this.props.productsData)
    let quantities = this.props.productsData.map(product => parseInt(product.selectedProductQuantity))
    let totalQuantities = quantities.length !== 0 ? quantities.reduce((total, item) => total + item) : null
    let pricePerQuantities = this.props.productsData.map(product => product.price * parseInt(product.selectedProductQuantity))
    let total = pricePerQuantities.length !== 0 ? pricePerQuantities.reduce((total, item) => total + item) : null

    let itemOrItems = totalQuantities > 1 ? 'items' : 'item'
    return (
      <React.Fragment>
        <GlobalStyle />
        {totalQuantities > 1 ?
          <div>
            <PageTitleContainer>
              <PageTitle>your bag</PageTitle>
              <Link className='continueShopping'>continue shopping</Link>
            </PageTitleContainer>
            <TotalTitle>
              <em>total </em>
              {`:(${totalQuantities} ${itemOrItems})`}
              <strong>{` $${total}`}</strong>
            </TotalTitle>
            <ContentContainer>
              <div>
                {this.props.productsData.map(product => <ProductSummaryBox key={product.selectedProductSKU} id={product.productId} productName={product.productName} productVersion={product.productVersion} size={product.selectedSize} stock={product.availabilityStatus} price={product.price} />)}
                <CheckoutButtons />
              </div>
              <OrderSummaryBox itemQuantity={totalQuantities} price={total} delivery={'free'} salesTax={'-'} total={total} />
            </ContentContainer>
          </div>
          :
          <div>
          <PageTitleContainer className='emptyBag'>
            <PageTitle>Your Bag is Empty</PageTitle>
            <p>Once you add something to your bag, it will appear here. Ready to get started?</p>
          </PageTitleContainer>
          <CheckoutButton onClick={()=>this.returnHome()}>
            <CheckoutSpan>get started</CheckoutSpan>
            <div style={{ fontSize: '20px' }}>
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </div>
          </CheckoutButton>
          </div>
        }
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