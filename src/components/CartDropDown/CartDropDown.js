import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import './CartDropDown.styles.scss'
const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"/>
      <CustomButton>Go To CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropDown
