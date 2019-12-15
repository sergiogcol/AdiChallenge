import React, { Component } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import productImage from '../../Images/superstar_cloud_white.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 2%;
    font-size: 16px;
    height: 100vh;
    text-transform: uppercase;
  }
`
const PageTitleContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  box-sizing: border-box;
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
const ProductSummary = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  width: 60%;
  height: 20%;
  margin-top: 40px;
  display:flex;
`
const ProductAndPriceContainer = styled.div`
  display: flex;
  flex-direction: column; 
  padding-left:2%;
  & > p {
    margin: 0px;
  }
  & > p.addSpace {
    margin-top: 10px;
  }
`
const IconContainer = styled.div`
  width: 25%; 
  margin-top: 15px; 
  font-size: 20px; 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  height: 30%;
  justify-content: space-between;
`

// http://testingfreak.com/how-to-fix-cross-origin-request-security-cors-error-in-firefox-chrome-and-ie/
export default class Cart extends Component {

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
        <ProductSummary>
          <img src={productImage} alt='Adidas Superstar Shoes Cloud White Color' height='100%' width='50%'></img>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <ProductAndPriceContainer>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>Superstar Shoes</p>
                <p>$80.0</p>
              </div>
              <p>Cloud White / Core Black / Cloud White</p>
              <p className='addSpace'>Size: M 5 / W 6</p>
              <p><strong>In Stock</strong></p>
            </ProductAndPriceContainer>
            <IconContainer>
              <FontAwesomeIcon icon={faTimes} />
              <FontAwesomeIcon icon={faHeart} />
            </IconContainer>
          </div>
        </ProductSummary>
      </React.Fragment>
    );
  }
}
