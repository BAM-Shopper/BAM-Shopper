import React, {Component} from 'react'
import {withRouter} from 'react-router'

import {connect} from 'react-redux'
import {Navbar} from './components'
import Routes from './routes'

import {fetchProducts} from './store/products'
import {fetchCategories} from './store/categories'
import {fetchOrders} from './store/orders'
import {fetchCart} from './store/cart'
import {fetchReviews} from './store/reviews'
import {fetchUsers} from './store/users'

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts()
    this.props.fetchCategories()
    this.props.fetchCart()
    this.props.fetchOrders()
    this.props.fetchReviews()
    this.props.fetchUsers()
  }

  render() {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchOrders: () => dispatch(fetchOrders()),
    fetchCart: () => dispatch(fetchCart()),
    fetchReviews: () => dispatch(fetchReviews()),
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App))
