import React from 'react'
import styled from 'styled-components'
import CheckoutButtons from './CheckoutButtons'

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

export default function OrderSummaryBox(props) {
    return (
        <OrderSummaryContainer>
            <CheckoutButtons className='column'/>
            <OrderSummary>
              <div>
                <h5 style={{ fontSize: '18px', lineHeight: '16px', margin: '0', marginBottom: '20px' }}>ORDER SUMMARY</h5>
                <OrderSummaryData>
                  <p>{`${props.itemQuantity} item`}</p>
                  <p>{props.price}</p>
                </OrderSummaryData>
                <OrderSummaryData>
                  <p>delivery</p>
                  <p>{props.delivery}</p>
                </OrderSummaryData>
                <OrderSummaryData>
                  <p>sales tax</p>
                  <p>{props.salesTax}</p>
                </OrderSummaryData>
                <OrderSummaryData className='total'>
                  <p>total</p>
                  <p>{props.total}</p>
                </OrderSummaryData>
              </div>
            </OrderSummary>
          </OrderSummaryContainer>
    )
}
