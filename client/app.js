import React, { Component } from 'react'
import { withRouter } from 'react-router'

import { connect } from 'react-redux'
import { Navbar } from './components'
import Routes from './routes'

import { fetchProducts } from './store/products'
import { fetchCategories } from './store/categories'
import { fetchOrders } from './store/orders'

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts()
    this.props.fetchCategories()
    this.props.fetchOrders()
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
    fetchOrders: () => dispatch(fetchOrders())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App))
