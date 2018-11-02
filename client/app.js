import React, {Component} from 'react'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'

import {Navbar} from './components'
import Routes from './routes'

import {fetchProducts} from './store/products'
import {fetchCategories} from './store/categories'
import {fetchOrders} from './store/orders'
import {fetchCart} from './store/cart'

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts()
    this.props.fetchCategories()
    this.props.fetchOrders()
    this.props.fetchCart()
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
    fetchCart: () => dispatch(fetchCart())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App))
