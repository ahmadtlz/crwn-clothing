import React from 'react'
import {connect }from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItems,selectCartTotal}from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'

import {CheckoutPageContainer,
        CheckoutHeaderContainer,
        HeaderBlockContainer,
        TotalContainer
}from './CheckoutPage.styles'


const CheckoutPage = ({cartItems,total}) => {
  return (
    <CheckoutPageContainer >
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map(cartItem=>
        <CheckoutItem key={cartItem.id} cartItem ={cartItem}/>
        )
      }

      <TotalContainer>
         <span>Total: ${total}</span>
      </TotalContainer>
     
    </CheckoutPageContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems:selectCartItems,
  total:selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage) 
