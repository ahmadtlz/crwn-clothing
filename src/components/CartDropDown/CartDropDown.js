import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import CartItem from '../cartItem/CartItem'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItemsContainer,
  CartDropdownButton} from './CartDropDown.styles'

const CartDropDown = ({cartItems,history,dispatch}) => {
 
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {
         cartItems.length?cartItems.map(cartItem=>(
          <CartItem key={cartItem.id} item={cartItem}/>
        )):<EmptyMessage>Your cart is empty</EmptyMessage>
        }
      </CartItemsContainer>
      <CartDropdownButton onClick={()=>{
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }}>Go To CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
  )
}

const mapStateToProps=createStructuredSelector({
  cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps) (CartDropDown))
