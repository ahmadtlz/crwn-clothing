import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import CartItem from '../cartItem/CartItem'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

import './CartDropDown.styles.scss'

const CartDropDown = ({cartItems,history,dispatch}) => {
 
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
         cartItems.length?cartItems.map(cartItem=>(
          <CartItem key={cartItem.id} item={cartItem}/>
        )):<span className="empty-message">Your cart is empty</span>
        }
      </div>
      <CustomButton onClick={()=>{
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }}>Go To CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps=createStructuredSelector({
  cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps) (CartDropDown))
