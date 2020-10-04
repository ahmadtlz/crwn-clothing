import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import CartItem from '../cartItem/CartItem'
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors'
import './CartDropDown.styles.scss'

const CartDropDown = ({cartItems}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem=>(
          <CartItem key={cartItem.id} item={cartItem}/>
        ))}
      </div>
      <CustomButton>Go To CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps=(state)=>({
  cartItems:selectCartItems(state)
})

export default connect(mapStateToProps) (CartDropDown)
