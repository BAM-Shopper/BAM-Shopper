import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {withRouter} from 'react-router'

const Navbar = ({handleClick, isLoggedIn, cart}) => (
  <div className="ui menu">
    <h1 className="brand item" style={{padding: '10px', margin: '0px'}}>
      BLOCKBLASTER
    </h1>
    <nav>
      {isLoggedIn ? (
        <div style={{display: 'flex'}}>
          {/* The navbar will show these links after you log in */}
          <Link to="/" className="ui item">
            Home
          </Link>
          <Link to="/account" className="ui item">
            My Account
          </Link>
          <Link to="/cart" className="ui item">
            View Cart{cart['cart items']
              ? cart['cart items'].length ? ' ' + cart['cart items'].length : ''
              : ''}
          </Link>
          <a className="ui item" href="#" onClick={handleClick}>
            {' '}
            Logout{' '}
          </a>
        </div>
      ) : (
        <div style={{display: 'flex'}}>
          {/* The navbar will show these links before you log in */}
          <Link to="/" className="ui item">
            Home
          </Link>
          <Link to="/login" className="ui item">
            Login
          </Link>
          <Link to="/signup" className="ui item">
            Sign Up
          </Link>
          {cart.id ? (
            <Link to="/cart" className="ui item">
              View Cart{cart['cart items']
                ? cart['cart items'].length
                  ? ' ' + cart['cart items'].length
                  : ''
                : ''}
            </Link>
          ) : (
            <Link to="/cart" className="ui item">
              View Cart
            </Link>
          )}
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    cart: state.cart
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Navbar))

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
