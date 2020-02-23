import React, { useContext } from 'react'
import styled from 'styled-components'
import productImage from '../../../Images/superstar_cloud_white.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import SingleSelect from '../../AuxiliaryComponents/SingleSelect'
import { ProductDataContext } from '../../../Contexts/ProductDataContext'
/* import { connect } from 'react-redux' */

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

const ProductSummaryBox = (props) => {

  const { dispatch } = useContext(ProductDataContext);

  const addSelected = (property, value) => {
    let { selectedProductSKU, id, productName, productVersion, size, stock, price, numberOfItemsOptions } = props;
    dispatch({
      type: 'UPDATE_PRODUCT', data: {
        availabilityStatus: stock,
        numberOfItemsOptions: numberOfItemsOptions,
        price: price,
        productId: id,
        productName: productName,
        productVersion: productVersion,
        selectedProductQuantity: value,
        selectedProductSKU: selectedProductSKU,
        selectedSize: size
      }
    })
  }

  const deleteProduct = () => {
    dispatch({ type: 'REMOVE_PRODUCT', id: props.id })
  }

  return (
    <ProductSummary>
      <img src={productImage} alt='Adidas Superstar Shoes Cloud White Color' height='240px' width='240px'></img>
      <div style={{ display: 'flex', justifyContent: 'space-between', height: '100%', width: '100%' }}>
        <ProductAndPriceContainer>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>{props.productName}</p>
            <p>{`$${props.price}`}</p>
          </div>
          <p style={{ textOverflow: 'ellipsis' }}>{props.productVersion}</p>
          <p className='addSpace'>{props.size}</p>
          <p style={{ marginBottom: '10%' }}><strong>{props.stock.replace("_", " ")}</strong></p>
          <SingleSelect options={props.numberOfItemsOptions} addSelected={addSelected} property={'selectedQuantity'} selectedOption={props.selectedProductQuantity} />
        </ProductAndPriceContainer>
        <IconContainer>
          <button onClick={() => deleteProduct()}>
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

export default ProductSummaryBox

/* const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeProduct: (id) => { dispatch({ type: 'REMOVE_PRODUCT', id }) },
    updateProduct: (data) => { dispatch({ type: 'UPDATE_PRODUCT', data }) }
  }
} */
/*
export default connect(mapStateToProps, mapDispatchToProps)(ProductSummaryBox) */