import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'


import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import './CartIcon.styles.scss'
const CartIcon = ({toggleCartHidden,cartItems}) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon"/>
  <span className="item-count">{cartItems}</span>
    </div>
  )
}

const mapDispatchToProps=dispatch=>({
  toggleCartHidden:()=>dispatch(toggleCartHidden())
})

const mapStateToProps=createStructuredSelector({
  cartItems:selectCartItemsCount
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)
