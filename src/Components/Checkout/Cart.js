import React, { Component } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import productImage from '../../Images/superstar_cloud_white.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import SingleSelect from '../AuxiliaryComponents/SingleSelect';

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
const OrderSummaryContainer = styled.div`
  margin-left: 5%;
  width: 30%
`
const OrderSummary = styled.article`
  border: 1px solid #ebedee;
  padding: 24px 15px;
  margin-top: 40px;
`
const OrderSummaryData = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 20px;
  & p{
    margin: 0;
  margin-bottom: 14px;
  }
  &.total{
    font-weight: 700;
  }
`
const ProductSummary = styled.section`
  box-sizing: border-box;
  border: 1px solid black;
  min-width:60%;
  height: 242px;
  margin-top: 40px;
  display:flex;
  justify-content: space-between;
`
const ProductAndPriceContainer = styled.article`
  display: flex;
  flex-direction: column; 
  padding-left:8%;
  padding-bottom: 16px;
  height: 100%;
 
  & > p {
    margin: 0px;
  }
  & > p.addSpace {
    margin-top: 10px;
  }
`
const IconContainer = styled.div`
  width: 20%; 
  margin-top: 15px; 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  height: 30%;
  justify-content: space-between;
  & > button {
    border: none;
    background-color: white;
    font-size: 20px; 
    &:hover{
      cursor: pointer;
      color: grey
    }
  }
`
const CheckoutButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top:40px;
  width: 100%;
  min-width:560px;
  &.column{
    flex-direction: column;
    min-width: 100%;
  }
`
const CheckoutButton = styled.button`
  flex: 1;
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
  &.paypal{
    background-color:white;
    color:black;
    border:1px solid #000;
    line-height: 48px;
    &::before{
      margin-left:21px;
      background: url(https://adl-foundation.adidas.com/dev/rc-19.0.0/assets/img/shared/icon-paypal-logo.svg) no-repeat 0;
      content: "";
      display: inline-block;
      height: 48px;
      min-width: 100px;
      width: 100%;
      border: none;
    }
    &::after{
      border: none;
    }
  }
`
const CheckoutSpan = styled.span`
  flex: 1 1 auto;
`
const OrSeparator = styled.p`
  margin: 0 14px;
  line-height: 48px;
  text-align: center;
`

// http://testingfreak.com/how-to-fix-cross-origin-request-security-cors-error-in-firefox-chrome-and-ie/
export default class Cart extends Component {

  addSelected = (property, value) => {
    this.setState({
      [property]: value
    })
  }
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <PageTitleContainer>
          <PageTitle>your bag</PageTitle>
          <Link className='continueShopping'>continue shopping</Link>
        </PageTitleContainer>
        <TotalTitle>
          <em>total </em>
          :(1 item)
          <strong> $80</strong>
        </TotalTitle>
        <ContentContainer>
        <div>
        <ProductSummary>
          <img src={productImage} alt='Adidas Superstar Shoes Cloud White Color' height='240px' width='240px'></img>
          <div style={{ display: 'flex', justifyContent: 'space-between', height: '100%', width: '100%' }}>
            <ProductAndPriceContainer>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>Superstar Shoes</p>
                <p>$80.00</p>
              </div>
              <p style={{ textOverflow: 'ellipsis' }}>Cloud White / Core Black / Cloud White</p>
              <p className='addSpace'>Size: M 5 / W 6</p>
              <p style={{ marginBottom: '10%' }}><strong>In Stock</strong></p>
              <SingleSelect options={[{ value: null, label: 1 }]} addSelected={this.addSelected} property={'selectedQuantity'} />
            </ProductAndPriceContainer>
            <IconContainer>
              <button>
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <button>
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </IconContainer>
          </div>
        </ProductSummary>
        <CheckoutButtonContainer>
          <CheckoutButton>
            <CheckoutSpan>checkout</CheckoutSpan>
            <div style={{ fontSize: '20px' }}>
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </div>
          </CheckoutButton>
          <OrSeparator>OR</OrSeparator>
          <CheckoutButton className='paypal'>
            <CheckoutSpan></CheckoutSpan>
            <div style={{ fontSize: '20px' }}>
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </div>
          </CheckoutButton>
        </CheckoutButtonContainer>
        </div>
        <OrderSummaryContainer>
        <CheckoutButtonContainer className='column'>
          <CheckoutButton>
            <CheckoutSpan>checkout</CheckoutSpan>
            <div style={{ fontSize: '20px' }}>
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </div>
          </CheckoutButton>
          <OrSeparator>OR</OrSeparator>
          <CheckoutButton className='paypal'>
            <CheckoutSpan></CheckoutSpan>
            <div style={{ fontSize: '20px' }}>
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </div>
          </CheckoutButton>
        </CheckoutButtonContainer>
        <OrderSummary>
          <div>
            <h5 style={{fontSize: '18px', lineHeight: '16px', margin: '0',marginBottom: '20px'}}>ORDER SUMMARY</h5>
            <OrderSummaryData>
              <p>1 item</p>
              <p>$80.00</p>
            </OrderSummaryData>
            <OrderSummaryData>
              <p>delivery</p>
              <p>free</p>
            </OrderSummaryData>
            <OrderSummaryData>
              <p>sales tax</p>
              <p>-</p>
            </OrderSummaryData>
            <OrderSummaryData className='total'>
              <p>total</p>
              <p>$80.00</p>
            </OrderSummaryData>
          </div>
        </OrderSummary>
        </OrderSummaryContainer>
        </ContentContainer>
      </React.Fragment>
    );
  }
}
