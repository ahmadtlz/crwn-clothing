import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/4.4 crown.svg'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'


import CartIcon from '../CartIcon/CartIcon'
import CartDropDown from '../CartDropDown/CartDropDown'
import {auth} from '../../firebase/firebase.util'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'

import './Header.styles.scss'
const Header = ({currentUser,hidden}) => {
  return (
    <div className='header'>
      <Link className="logo-container" to="/">
         <Logo className="logo"/>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">SHOP</Link>
        <Link className="option" to="/contact">CONTACT</Link>
        {
          currentUser?
          <div className="option" onClick={_=>auth.signOut()}>SIGN OUT</div>
          :
          <Link className="option" to="/signin">SIGN IN</Link>
        }
        <CartIcon/>
      </div>
      {hidden?null: <CartDropDown/>}
    </div>
  )
}

const mapStateToProps=createStructuredSelector({
 currentUser:selectCurrentUser,
 hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header)
