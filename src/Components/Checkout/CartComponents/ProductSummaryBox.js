import React, { Component } from 'react'
import styled from 'styled-components';
import productImage from '../../../Images/superstar_cloud_white.webp'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import SingleSelect from '../AuxiliaryComponents/SingleSelect'

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

export default class ProductSummaryBox extends Component {
    render() {
        return (
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
        )
    }
}
