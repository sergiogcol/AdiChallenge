import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

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

export default function CheckoutButtons(props) {
    return (
        <div>
            <CheckoutButtonContainer className={props.className}>
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
    )
}
