import React from 'react'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'


import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'


import {CartIconContainer,
  ShoppingIcon,
  ItemCountContainer}from './CartICon.styles'
  
const CartIcon = ({toggleCartHidden,cartItems}) => {
  return (
    <CartIconContainer  onClick={toggleCartHidden}>
      <ShoppingIcon />
     <ItemCountContainer>{cartItems}</ItemCountContainer>
    </CartIconContainer>
  )
}

const mapDispatchToProps=dispatch=>({
  toggleCartHidden:()=>dispatch(toggleCartHidden())
})

const mapStateToProps=createStructuredSelector({
  cartItems:selectCartItemsCount
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)
