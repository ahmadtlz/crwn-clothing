import React from 'react'
import {ReactComponent as Logo} from '../../assets/4.4 crown.svg'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'


import CartIcon from '../CartIcon/CartIcon'
import CartDropDown from '../CartDropDown/CartDropDown'
import {auth} from '../../firebase/firebase.util'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink}from './Header.styles'

const Header = ({currentUser,hidden}) => {
  return (
    <HeaderContainer>
      <LogoContainer  to="/">
         <Logo/>
      </LogoContainer>
      <OptionsContainer>
        <OptionLink  to="/shop">SHOP</OptionLink>
        <OptionLink  to="/contact">CONTACT</OptionLink>
        {
          currentUser?
          <OptionLink as='div'  onClick={_=>auth.signOut()}>SIGN OUT</OptionLink>
          :
          <OptionLink  to="/signin">SIGN IN</OptionLink>
        }
        <CartIcon/>
      </OptionsContainer>
      {hidden?null: <CartDropDown/>}
    </HeaderContainer>
  )
}

const mapStateToProps=createStructuredSelector({
 currentUser:selectCurrentUser,
 hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header)
